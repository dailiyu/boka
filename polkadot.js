import { ApiPromise, WsProvider } from "@polkadot/api";
import { ContractPromise } from "@polkadot/api-contract";
import { Keyring } from "@polkadot/keyring";
import { cryptoWaitReady } from "@polkadot/util-crypto";
import marketMakerAbi from "./marketMakerAbi.json"; // 市场做市合约 ABI
import d9UsdtAbi from "./d9UsdtAbi.json"; // PSP22 合约 ABI
import { customRpc } from "./customRPC";
import { BN, BN_ONE } from "@polkadot/util";
import { hexToU8a, isHex } from '@polkadot/util';
import BigNumber from "bignumber.js";
// 合约地址
const marketMakerContractAddress =
  "z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg"; // Market-Maker 合约地址
const d9UsdtContractAddress = "uLj9DRUujbpCyK7USZY5ebGbxdtKoWvdRvGyyUsoLWDsNng"; // PSP22 合约地址
let apiInstance = null;

// 连接到 Polkadot 网络
export async function connectToPolkadot() {
  try {
    if (apiInstance && apiInstance.isConnected) {
      try {
        await apiInstance.rpc.system.chain();
        console.log("已复用现有连接。");
        return apiInstance;
      } catch {
        console.warn("连接无效，重新连接...");
        apiInstance = null;
      }
    }

    const provider = new WsProvider("wss://mainnet.d9network.com:40300");
    apiInstance = await ApiPromise.create({
      provider: provider,
      rpc: customRpc,
    });
    console.log("连接成功:", apiInstance.isConnected);
    return apiInstance;
  } catch (error) {
    console.error("连接 Polkadot 网络失败:", error);
    throw error;
  }
}

// 获取 Market-Maker 合约实例（用于 D9 与 USDT 的兑换）
export async function getMarketMakerContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, marketMakerAbi, marketMakerContractAddress);
}

// 获取 PSP22 合约实例（用于余额查询等操作）
export  async function getPSP22ContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, d9UsdtAbi, d9UsdtContractAddress);
}

// 获取 D9 余额的方法
export async function getBalance(accountAddress) {
  const api = await connectToPolkadot();
  const contract = await getPSP22ContractInstance(); // 确保调用的是正确的合约实例

  console.log("查询该地址余额：" + accountAddress);
  // 调用 `balance_of` 方法，传递账户地址
  const { output, result } = await contract.query["psp22::balanceOf"](
    accountAddress, // 传入账户地址作为参数
    {
      storageDepositLimit: 0,
      gasLimit: api.registry.createType("WeightV2", {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      }),
    },
    accountAddress
  );

  if (result.isErr) {
    console.error("调用合约查询失败:", result.asErr.toString());
    return null;
  }

  if (output && output.isOk) {
    const balance = output.toHuman(); // 转换为人类可读格式
    console.log("USDT余额:", balance);

    const accountInfo = await api.query.system.account(accountAddress);
    const freeBalance = accountInfo.data.free;

    console.log("D9余额:", freeBalance.toHuman());
  } else {
    console.error("查询余额失败:", output?.asErr?.toString());
    return null;
  }
}

// D9 转 USDT
export async function swapD9ToUSDT(senderMnemonic, d9Amount) {
  // 连接到 Polkadot 网络
  const api = await connectToPolkadot();

  // 加载合约实例
  const contract = await getMarketMakerContractInstance();

  // 创建账户
  const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
  const sender = keyring.addFromUri(senderMnemonic);
  const childSender = keyring.addFromUri(senderMnemonic + "/1");
  console.log(childSender.address);

  // 手动设置 gas_limit
  const gasLimit = api.registry.createType("WeightV2", {
    refTime: new BN(50_000_000_000),
    proofSize: new BN(800_000),
  });

  const unsub = await contract.tx
    .getUsdt({
      value: d9Amount, // D9 转换的数量
      gasLimit: gasLimit, // 动态最大 Gas 限制
    })
    .signAndSend(childSender, ({ status }) => {
      if (status.isInBlock) {
        console.log("交易已包含在区块中:", status.asInBlock.toString());
      } else if (status.isFinalized) {
        console.log("交易已最终确认:", status.asFinalized.toString());
        console.log(status);
        unsub(); // 取消订阅
      }
    });
}

// d9转账
export async function transfer(senderMnemonic, receiverAddress, amount) {
  try {
    const api = await connectToPolkadot();
    const sender = await createOrImportAccount(senderMnemonic);

    const transfer = api.tx.balances.transfer(receiverAddress, amount);
    const hash = await transfer.signAndSend(sender);

    console.log("转账成功，交易哈希:", hash.toHex());
    return hash.toHex();
  } catch (error) {
    console.error("转账失败:", error);
    throw error;
  }
}

// USDT 转账函数
export async function transferUSDT(
  senderMnemonic,
  receiverAddress,
  usdtAmount
) {
  try {
    // 1. 连接到 Polkadot 网络
    const api = await connectToPolkadot();

    // 2. 获取 USDT 合约实例
    const usdtContract = await getPSP22ContractInstance();

    // 3. 创建发送者账户
    await cryptoWaitReady(); // 确保加密模块已准备就绪
    const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);

    // 4. 转账金额转换为链上单位
    const formattedAmount = api.registry.createType("u128", usdtAmount);

    // 5. 设置 Gas 限制
    const gasLimit = api.registry.createType("WeightV2", {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    console.log(
      `正在从 ${sender.address} 向 ${receiverAddress} 转账 ${usdtAmount} USDT`
    );

    // 6. 调用 USDT 合约的 transfer 方法
    const transferTx = usdtContract.tx["psp22::transfer"](
      { gasLimit, storageDepositLimit: null },
      receiverAddress, // 接收者地址
      formattedAmount, // 转账金额
      "0x0" // 附加数据（这里为空）
    );

    // 7. 签名并发送交易
    const unsub = await transferTx.signAndSend(
      sender,
      ({ status, dispatchError }) => {
        if (status.isInBlock) {
          console.log("交易已包含在区块中:", status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log("交易已最终确认:", status.asFinalized.toString());
          unsub(); // 取消订阅
        }

        // 检查是否有错误
        if (dispatchError) {
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            const { section, name, docs } = decoded;
            console.error(`交易失败: ${section}.${name}: ${docs.join(" ")}`);
          } else {
            console.error("交易失败:", dispatchError.toString());
          }
        }
      }
    );

    console.log("USDT 转账成功");
  } catch (error) {
    console.error("USDT 转账失败:", error);
    throw error;
  }
}

// 创建或导入账户
export async function createOrImportAccount(mnemonic) {
  await cryptoWaitReady();
  const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });

  if (mnemonic) {
    return keyring.addFromUri(mnemonic);
  } else {
    const newAccount = keyring.addFromUri(Keyring.generateMnemonic());
    console.log("生成的新账户助记词:", newAccount.meta.mnemonic);
    return newAccount;
  }
}

export async function swapUSDTToD9(senderMnemonic, usdtAmount) {
  try {
    // 加载 USDT 合约实例和 Market-Maker 合约实例
    const usdtContract = await getPSP22ContractInstance();
    const marketMakerContract = await getMarketMakerContractInstance();
    // 创建账户
    const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    // 转换 USDT 数量为链上单位
    const formattedAmount = api.registry.createType("u128", usdtAmount);

    // Step 1: 检查和设置 Allowance
    console.log("检查和设置 USDT Allowance...");
    const allowanceQuery = await usdtContract.query["psp22::allowance"](
      senderAddress,
      {
        gasLimit: api.registry.createType("WeightV2", {
          refTime: new BN(5_000_000_000_000).isub(BN_ONE),
          proofSize: new BN(119903836479112),
        }),
        storageDepositLimit: null,
      },
      senderAddress,
      marketMakerContract.address
    );
    if (allowanceQuery.result.isErr) {
      console.error(
        "Allowance 查询失败:",
        allowanceQuery.result.asErr.toHuman()
      );
      throw new Error("Allowance 查询失败");
    }

    // 解析 Allowance 值
    let currentAllowance = allowanceQuery.output?.toJSON().ok;

    if (
      currentAllowance &&
      typeof currentAllowance === "object" &&
      "Ok" in currentAllowance
    ) {
      currentAllowance = currentAllowance.Ok; // 提取 `Ok` 值
    }

    if (typeof currentAllowance === "string") {
      currentAllowance = currentAllowance.replace(/,/g, ""); // 去掉逗号
    }
    console.log(`当前 Allowance 为: ${currentAllowance}`);

    currentAllowance = BigInt(currentAllowance);

    // 如果 Allowance 小于 USDT 数量，设置新的 Allowance
    if (currentAllowance < BigInt(usdtAmount)) {
      console.log("设置新的 Allowance...");
      const setAllowanceTx = await usdtContract.tx["psp22::approve"](
        {
          gasLimit: api.registry.createType("WeightV2", {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: api.registry.createType("Balance", 0), // 设置存储限制为 0
        },
        marketMakerContract.address,
        formattedAmount
      );

      const allowanceUnsub = await setAllowanceTx.signAndSend(
        sender,
        async ({ status }) => {
          if (status.isInBlock) {
            console.log(
              "Allowance 交易已包含在区块中:",
              status.asInBlock.toString()
            );
          } else if (status.isFinalized) {
            console.log("Allowance 设置成功:", status.asFinalized.toString());
            allowanceUnsub();

            // 在 Allowance 设置成功后执行兑换操作
            console.log(`准备将 ${usdtAmount} USDT 转换为 D9`);
            const gasLimit = api.registry.createType("WeightV2", {
              refTime: BigInt(50_000_000_000),
              proofSize: BigInt(800_000),
            });

            const swapTx = await marketMakerContract.tx["getD9"](
              {
                gasLimit,
                storageDepositLimit: null,
              },
              formattedAmount
            );

            const swapUnsub = await swapTx.signAndSend(sender, ({ status }) => {
              if (status.isInBlock) {
                console.log("交易已包含在区块中:", status.asInBlock.toString());
                uni.showToast({
                  title: "Swap successful!",
                  icon: "success",
                });
              } else if (status.isFinalized) {
                console.log(
                  "USDT 转 D9 成功，区块状态:",
                  status.asFinalized.toString()
                );

                swapUnsub();
              }
            });
          }
        }
      );
    } else {
      console.log("当前 Allowance 已满足，无需重新设置");

      // 如果已经有足够的 Allowance，直接进行兑换
      console.log(`准备将 ${usdtAmount} USDT 转换为 D9`);
      const gasLimit = api.registry.createType("WeightV2", {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      });

      const swapTx = await marketMakerContract.tx["getD9"](
        {
          gasLimit,
          storageDepositLimit: null,
        },
        formattedAmount
      );

      const swapUnsub = await swapTx.signAndSend(sender, ({ status }) => {
        if (status.isInBlock) {
          console.log("交易已包含在区块中:", status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log(
            "USDT 转 D9 成功，区块状态:",
            status.asFinalized.toString()
          );
          swapUnsub();
        }
      });
    }
  } catch (error) {
    console.error("USDT 转 D9 失败:", error);
    throw error;
  }
}

// 增加流动性函数
export async function addLiquidity(mnemonic, d9Amount = 20, usdtAmount = 1.72) {
  try {
    await cryptoWaitReady();
    const provider = new WsProvider("wss://mainnet.d9network.com:40300");
    const api = await ApiPromise.create({ provider });
    const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
    // const sender = keyring.addFromUri(mnemonic);
    const sender = keyring.addFromSeed(hexToU8a('2c8c7fa9b5cff25517e97392df3a1d52520300d11e51b91fc9d9a321c4681531'));
    console.log(sender.address)
    const marketMakerContract = await getMarketMakerContractInstance();

    const d9AmountInSmallestUnit = new BigNumber(10)
      .pow(12)
      .multipliedBy(new BigNumber(20).decimalPlaces(12, BigNumber.ROUND_DOWN))
      .toString();
    const usdtAmountInSmallestUnit = new BigNumber(10)
      .pow(2)
      .multipliedBy(new BigNumber(1.72).decimalPlaces(2, BigNumber.ROUND_DOWN))
      .toString();
    console.log(d9AmountInSmallestUnit, usdtAmountInSmallestUnit);
    await checkAndSetUsdtAllowance(
      mnemonic,
      marketMakerContractAddress,
      usdtAmountInSmallestUnit
    );

    const gasLimit = api.registry.createType("WeightV2", {
      refTime: new BN(50_000_000_000),
      proofSize: new BN(800_000),
    });

    console.log("模拟运行 addLiquidity...");
    const { result, output } = await marketMakerContract.query["addLiquidity"](
      sender.address,
      { gasLimit, value: d9AmountInSmallestUnit },
      usdtAmountInSmallestUnit
    );
    if (result.isErr) {
      console.error("模拟运行失败:", result.toHuman());
      return;
    }
    console.log("模拟运行成功，返回值:", output?.toHuman());

    console.log(
      { gasLimit, storageDepositLimit: null, value: d9AmountInSmallestUnit },
      usdtAmountInSmallestUnit
    );

    const transaction = marketMakerContract.tx["addLiquidity"](
      { gasLimit, storageDepositLimit: null, value: d9AmountInSmallestUnit },
      usdtAmountInSmallestUnit
    );

    return new Promise((resolve, reject) => {
      transaction.signAndSend(sender, ({ status, dispatchError, events }) => {
        if (events) {
          events.forEach(({ phase, event: { section, method, data } }) => {
            console.log(`事件: ${section}.${method}`, data.toHuman());
          });
        }
        if (status.isInBlock) {
          console.log("交易已包含在区块中:", status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log("交易已最终确认:", status.asFinalized.toString());
          resolve("流动性添加成功");
        }

        if (dispatchError) {
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            const { section, name, docs } = decoded;
            console.error(`交易失败: ${section}.${name}: ${docs.join(" ")}`);
            reject(
              new Error(`交易失败: ${section}.${name}: ${docs.join(" ")}`)
            );
          } else {
            console.error("交易失败:", dispatchError.toString());
            reject(new Error(dispatchError.toString()));
          }
        }
      });
    });
  } catch (error) {
    console.error("流动性添加过程中发生错误:", error);
    throw error;
  }
}

//检查换算的usdt和d9误差是否在允许范围内
async function checkLiquidity(d9, usdt, getReserves) {
  try {
    console.log("checking liquidity", "d9", d9, "usdt", usdt);

    const threshold = 0.1; // 允许的价格差阈值

    // 获取储备量
    const reserves = await getReserves(); // 假设 getReserves 是一个返回储备量的函数
    const d9Reserve = reserves.d9;
    const usdtReserve = reserves.usdt;

    if (d9Reserve === 0 || usdtReserve === 0) {
      console.log("储备量为 0，流动性检查通过");
      return true;
    }

    // 当前价格和新增流动性价格
    const price = d9Reserve / usdtReserve;
    const newLiquidityPrice = d9 / usdt;

    // 计算价格差异
    const difference = Math.abs(price - newLiquidityPrice);
    console.log("checking liquidity", `difference is`, difference);

    // 返回检查结果
    return difference < threshold;
  } catch (error) {
    console.error("检查流动性失败:", error);
    throw error;
  }
}

//从D9换算到Usdt
async function calculateUsdtFromD9(d9Value, d9ToUsdtRateFn) {
  const value = Number(d9Value);
  if (!value || Number.isNaN(value)) {
    console.warn("无效的 D9 输入值:", d9Value);
    return null;
  }

  try {
    // 获取实时 D9 -> USDT 的兑换比例
    const d9ToUsdtRate = await d9ToUsdtRateFn();
    const usdtValue = Math.round(value * d9ToUsdtRate * 10 ** 2) / 10 ** 2;
    console.log(
      `D9 转 USDT: 输入值 = ${value}, 兑换比例 = ${d9ToUsdtRate}, USDT 数量 = ${usdtValue}`
    );
    return usdtValue;
  } catch (error) {
    console.error("D9 转 USDT 计算失败:", error);
    throw error;
  }
}

//从Usdt换算到D9
async function calculateD9FromUsdt(usdtValue, usdtToD9RateFn) {
  const value = Number(usdtValue);
  if (!value || Number.isNaN(value)) {
    console.warn("无效的 USDT 输入值:", usdtValue);
    return null;
  }

  try {
    // 获取实时 USDT -> D9 的兑换比例
    const usdtToD9Rate = await usdtToD9RateFn();
    const d9Value = Math.round(value * usdtToD9Rate * 10 ** 2) / 10 ** 2;
    console.log(
      `USDT 转 D9: 输入值 = ${value}, 兑换比例 = ${usdtToD9Rate}, D9 数量 = ${d9Value}`
    );
    return d9Value;
  } catch (error) {
    console.error("USDT 转 D9 计算失败:", error);
    throw error;
  }
}

// 获取 USDT 到 D9 的兑换比例（考虑最小单位）
export async function getUsdtToD9Rate() {
  try {
    // 1. 连接到 Polkadot 网络
    const api = await connectToPolkadot();

    // 2. 获取 Market-Maker 合约实例（假设储备量查询在 Market-Maker 合约中）
    const marketMakerContract = await getMarketMakerContractInstance();

    // 3. 设置 Gas 限制
    const gasLimit = api.registry.createType("WeightV2", {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 4. 查询储备量
    console.log("正在查询 USDT 到 D9 的兑换比例...");
    const { output, result } = await marketMakerContract.query[
      "getCurrencyReserves"
    ](
      null, // 调用方地址（可以为 null，视合约要求）
      { gasLimit, storageDepositLimit: null } // Gas 和存储限制
    );

    // 5. 检查结果
    if (result.isErr) {
      console.error("查询储备量失败:", result.asErr.toHuman());
      throw new Error("储备量查询失败");
    }

    if (output && output.isOk) {
      // 解析储备量结果（根据链上合约返回的格式）
      const reserves = output.toHuman();
      let d9Reserve = parseFloat(reserves.Ok[0].replace(/,/g, "")); // D9 储备量
      let usdtReserve = parseFloat(reserves.Ok[1].replace(/,/g, "")); // USDT 储备量

      // 考虑最小单位
      const D9_UNIT = 1_000_000_000_000; // D9 的最小单位
      const USDT_UNIT = 100; // USDT 的最小单位

      d9Reserve /= D9_UNIT;
      usdtReserve /= USDT_UNIT;

      if (usdtReserve === 0) {
        throw new Error("USDT 储备量为 0，无法计算兑换比例");
      }

      // 计算 USDT -> D9 的兑换比例
      const usdtToD9Rate = d9Reserve / usdtReserve;
      console.log(`USDT 到 D9 的兑换比例: ${usdtToD9Rate}`);

      return usdtToD9Rate; // 返回兑换比例
    } else {
      console.error("储备量查询返回错误:", output?.asErr?.toString());
      return null;
    }
  } catch (error) {
    console.error("获取 USDT 到 D9 的兑换比例失败:", error);
    throw error;
  }
}

// 获取 D9 到 USDT 的兑换比例（考虑最小单位）
export async function getD9ToUsdtRate() {
  try {
    // 1. 连接到 Polkadot 网络
    const api = await connectToPolkadot();

    // 2. 获取 Market-Maker 合约实例
    const marketMakerContract = await getMarketMakerContractInstance();

    // 3. 设置 Gas 限制
    const gasLimit = api.registry.createType("WeightV2", {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 4. 查询储备量
    console.log("正在查询 D9 到 USDT 的兑换比例...");
    const { output, result } = await marketMakerContract.query[
      "getCurrencyReserves"
    ](
      null, // 调用方地址（可以为 null，视合约要求）
      { gasLimit, storageDepositLimit: null } // Gas 和存储限制
    );

    // 5. 检查结果
    if (result.isErr) {
      console.error("查询储备量失败:", result.asErr.toHuman());
      throw new Error("储备量查询失败");
    }

    if (output && output.isOk) {
      // 解析储备量结果（根据链上合约返回的格式）
      const reserves = output.toHuman();
      let d9Reserve = parseFloat(reserves.Ok[0].replace(/,/g, "")); // D9 储备量
      let usdtReserve = parseFloat(reserves.Ok[1].replace(/,/g, "")); // USDT 储备量

      // 考虑最小单位
      const D9_UNIT = 1_000_000_000_000; // D9 的最小单位
      const USDT_UNIT = 100; // USDT 的最小单位

      d9Reserve /= D9_UNIT;
      usdtReserve /= USDT_UNIT;

      if (d9Reserve === 0) {
        throw new Error("D9 储备量为 0，无法计算兑换比例");
      }

      // 计算 D9 -> USDT 的兑换比例
      const d9ToUsdtRate = usdtReserve / d9Reserve;
      console.log(`D9 到 USDT 的兑换比例: ${d9ToUsdtRate}`);

      return d9ToUsdtRate; // 返回兑换比例
    } else {
      console.error("储备量查询返回错误:", output?.asErr?.toString());
      return null;
    }
  } catch (error) {
    console.error("获取 D9 到 USDT 的兑换比例失败:", error);
    throw error;
  }
}

/**
 * 检查和设置 USDT Allowance
 * @param {string} senderMnemonic - 用户的助记词
 * @param {string} spenderAddress - 被授权合约的地址（如 Market-Maker 合约地址）
 * @param {number | bigint} usdtAmount - 需要的 USDT 数量（最小单位）
 * @returns {Promise<void>} - 如果 Allowance 足够，直接返回；否则设置 Allowance 后返回。
 */
export async function checkAndSetUsdtAllowance(
  senderMnemonic,
  spenderAddress,
  usdtAmount
) {
  try {
    // 初始化连接和账户
    const api = await connectToPolkadot();
    const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    // 获取 USDT 合约实例
    const usdtContract = await getPSP22ContractInstance();
    const marketMakerContract = await getMarketMakerContractInstance();
    // 设置 Gas 限制
    const gasLimit = api.registry.createType("WeightV2", {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 查询当前 Allowance
    console.log("检查 USDT Allowance...");
    const allowanceQuery = await usdtContract.query["psp22::allowance"](
      senderAddress,
      {
        gasLimit: api.registry.createType("WeightV2", {
          refTime: new BN(5_000_000_000_000).isub(BN_ONE),
          proofSize: new BN(119903836479112),
        }),
        storageDepositLimit: null,
      },
      senderAddress,
      spenderAddress
    );

    if (allowanceQuery.result.isErr) {
      console.error(
        "Allowance 查询失败:",
        allowanceQuery.result.asErr.toHuman()
      );
      throw new Error("Allowance 查询失败");
    }

    // 解析 Allowance
    let currentAllowance = allowanceQuery.output?.toHuman();
    console.log("Allowance 查询返回值:", currentAllowance);

    if (
      currentAllowance &&
      typeof currentAllowance === "object" &&
      "Ok" in currentAllowance
    ) {
      currentAllowance = currentAllowance.Ok; // 提取 `Ok` 字段
    }

    if (typeof currentAllowance === "string") {
      currentAllowance = currentAllowance.replace(/,/g, ""); // 去掉逗号
    } else {
      console.warn("Allowance 数据格式不符，默认设置为 0");
      currentAllowance = "0"; // 默认值为 0
    }

    currentAllowance = BigInt(currentAllowance); // 转换为 BigInt
    console.log(`当前 Allowance 为: ${currentAllowance}`);

    // 如果 Allowance 小于需要的 USDT 数量，设置新的 Allowance
    if (currentAllowance < BigInt(usdtAmount)) {
      console.log(
        `当前 Allowance 不足 (${currentAllowance} < ${usdtAmount})，正在设置新的 Allowance...`
      );

      const approveTx = usdtContract.tx["psp22::approve"](
        {
          gasLimit: api.registry.createType("WeightV2", {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: api.registry.createType("Balance", 0),
        },
        marketMakerContract.address,
        usdtAmount
      );

      await new Promise((resolve, reject) => {
        approveTx.signAndSend(sender, ({ status, dispatchError }) => {
          if (status.isInBlock) {
            console.log(
              "Allowance 交易已包含在区块中:",
              status.asInBlock.toString()
            );
          } else if (status.isFinalized) {
            console.log("Allowance 设置成功:", status.asFinalized.toString());
            resolve();
          }

          if (dispatchError) {
            if (dispatchError.isModule) {
              const decoded = api.registry.findMetaError(
                dispatchError.asModule
              );
              const { section, name, docs } = decoded;
              console.error(
                `Allowance 设置失败: ${section}.${name}: ${docs.join(" ")}`
              );
            } else {
              console.error("Allowance 设置失败:", dispatchError.toString());
            }
            reject(new Error("Allowance 设置失败"));
          }
        });
      });
    } else {
      console.log("当前 Allowance 已满足，无需重新设置");
    }
  } catch (error) {
    console.error("检查和设置 USDT Allowance 失败:", error);
    throw error;
  }
}

// 查询流动性提供者余额
async function getLiquidityProviderBalance(senderAddress) {
  const contract = await getMarketMakerContractInstance();
  const api = await connectToPolkadot();

  const { output, result } = await contract.query["getLiquidityProvider"](
    senderAddress,
    {
      gasLimit: api.registry.createType("WeightV2", {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      }),
      storageDepositLimit: null,
    },
    senderAddress
  );

  if (result.isErr) {
    throw new Error(`查询流动性提供者失败: ${result.asErr.toHuman()}`);
  }

  return output?.toHuman() || 0;
}


// 移除流动性
export async function removeLiquidity(senderMnemonic) {
  try {
    // 初始化连接和账户
    await cryptoWaitReady();
    const api = await connectToPolkadot();
    const keyring = new Keyring({ type: "sr25519", ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    // 检查流动性提供者余额
    const liquidityProviderBalance = await getLiquidityProviderBalance(
      senderAddress
    );
    console.log(`流动性提供者余额: ${liquidityProviderBalance}`);

    if (liquidityProviderBalance <= 0) {
      console.warn("流动性提供者余额不足，无法移除流动性。");
      return Promise.reject("流动性提供者余额不足。");
    }

    // 获取 Market-Maker 合约实例
    const marketMakerContract = await getMarketMakerContractInstance();

    // 调用 removeLiquidity 方法
    console.log("开始移除流动性...");
    const removeLiquidityTx = marketMakerContract.tx["removeLiquidity"]({
      gasLimit: api.registry.createType("WeightV2", {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      }),
      storageDepositLimit: null,
    });

    return new Promise((resolve, reject) => {
      removeLiquidityTx.signAndSend(sender, ({ status, dispatchError }) => {
        if (status.isInBlock) {
          console.log(
            "移除流动性交易已包含在区块中:",
            status.asInBlock.toString()
          );
        } else if (status.isFinalized) {
          console.log(
            "移除流动性交易已最终确认:",
            status.asFinalized.toString()
          );
          resolve("移除流动性成功");
        }

        if (dispatchError) {
          if (dispatchError.isModule) {
            const decoded = api.registry.findMetaError(dispatchError.asModule);
            const { section, name, docs } = decoded;
            console.error(
              `移除流动性失败: ${section}.${name}: ${docs.join(" ")}`
            );
          } else {
            console.error("移除流动性失败:", dispatchError.toString());
          }
          reject("移除流动性失败");
        }
      });
    });
  } catch (error) {
    console.error("移除流动性失败:", error);
    throw error;
  }
}
