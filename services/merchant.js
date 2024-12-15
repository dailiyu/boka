import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import marketMakerAbi from '../marketMakerAbi.json'; // 市场做市合约 ABI
import ABID9MerchantMining from '../ABIs/d9-merchant-mining.json'
import d9UsdtAbi from '../d9UsdtAbi.json'; // PSP22 合约 ABI
import { customRpc } from '../customRPC'
import { BN, BN_ONE } from '@polkadot/util'


// {
//     writeLimit: api.registry.createType('WeightV2', { refTime: new BN(50_000_000_000), proofSize: new BN(800_000) }) as WeightV2,
//     readLimit: api.registry.createType('WeightV2', { refTime: MAX_CALL_WEIGHT, proofSize: PROOFSIZE }) as WeightV2,
//   }

// 合约地址
const marketMakerContractAddress = 'z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg'; // Market-Maker 合约地址
const d9UsdtContractAddress = 'uLj9DRUujbpCyK7USZY5ebGbxdtKoWvdRvGyyUsoLWDsNng'; // PSP22 合约地址
const d9MerchantMiningAddress='xjyLYnZBRhYYjUKjCp8UiHnmcjHmkPfRSBxTiLLMoEwtzwp'


let apiInstance = null;

// 连接到 Polkadot 网络
export async function connectToPolkadot() {
  try {
    if (apiInstance && apiInstance.isConnected) {
      try {
        await apiInstance.rpc.system.chain();
        console.log('已复用现有连接。');
        return apiInstance;
      } catch {
        console.warn('连接无效，重新连接...');
        apiInstance = null;
      }
    }

    const provider = new WsProvider('wss://mainnet.d9network.com:40300');
    apiInstance = await ApiPromise.create({ provider:provider,rpc:customRpc });
    console.log('连接成功:', apiInstance.isConnected);
    return apiInstance;
  } catch (error) {
    console.error('连接 Polkadot 网络失败:', error);
    throw error;
  }
}

// 获取 MerchantMining 合约实例
async function getD9MerchantMiningContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, ABID9MerchantMining, d9MerchantMiningAddress);
}



// 获取 Market-Maker 合约实例（用于 D9 与 USDT 的兑换）
async function getMarketMakerContractInstance() {
    const api = await connectToPolkadot();
    return new ContractPromise(api, marketMakerAbi, marketMakerContractAddress);
  }
  
  // 获取 PSP22 合约实例（用于余额查询等操作）
  async function getPSP22ContractInstance() {
    const api = await connectToPolkadot();
    return new ContractPromise(api, d9UsdtAbi, d9UsdtContractAddress);
  }
  

/// 获取商家码过期时间
export async function getMerchantExpiry(address) {
    try {
      // 确保连接到 Polkadot 网络
      const api = await connectToPolkadot();
  
      // 获取 MerchantMining 合约实例
      const contract = await getD9MerchantMiningContractInstance();
      const gasLimit = api.registry.createType('WeightV2', {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      });
  
      // 查询合约方法 "getExpiry"
      const { gasRequired, result, output } = await contract.query.getExpiry(
        address, // 调用者的地址
        {
          gasLimit,
          storageDepositLimit: null, // 无存储限制
        },
        address // 查询的目标地址
      );
  
      // 检查合约调用是否成功
      if (result.isOk) {
        console.log(output.toHuman().Ok.Ok)
        const expiryTimeMs = BigInt(output.toHuman().Ok.Ok.replace(/,/g, '')); // 转换为毫秒的 Unix 时间戳
        console.log('商家码过期时间 (毫秒):', expiryTimeMs.toString());
  
        // 计算剩余天数
        const remainingDays = calculateRemainingDays(expiryTimeMs);
        console.log('剩余天数:', remainingDays);
  
        return { expiryTimeMs, remainingDays };
      } else {
        console.error('调用 getExpiry 失败:', result.asErr.toHuman);
        throw new Error('获取商家码过期时间失败');
      }
    } catch (error) {
      console.error('获取商家码过期时间时发生错误:', error);
      throw error;
    }
  }
  
  // 计算剩余天数
  function calculateRemainingDays(expiryTimeMs) {
    const currentTimeMs = BigInt(Date.now()); // 当前时间的 Unix 时间戳（毫秒）
    const remainingTimeMs = expiryTimeMs - currentTimeMs; // 剩余时间（毫秒）
  
    if (remainingTimeMs <= 0) {
      return 0; // 如果已过期，返回 0 天
    }
  
    const msPerDay = BigInt(24 * 60 * 60 * 1000); // 一天的毫秒数
    return Number(remainingTimeMs / msPerDay); // 计算剩余天数并转换为数字
  }



// 订阅商家码
export async function subscribeMerchant(senderMnemonic, months) {
    try {
      // 确保连接到 Polkadot 网络
      const api = await connectToPolkadot();
  
      // 获取 PSP22 合约实例和 MerchantMining 合约实例
      const usdtContract = await getPSP22ContractInstance();
      const merchantContract = await getD9MerchantMiningContractInstance();
  
      // 创建账户
      const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
      const sender = keyring.addFromUri(senderMnemonic);
      const senderAddress = sender.address;
  
      // 计算需要支付的 USDT 数量（每月 10 USDT，单位转换为链上的 10^18）
      const formattedAmount = api.registry.createType('u128', months*10);
    //   const usdtAmount = BigInt(months) * BigInt(10_000_000_000_000_000_000); // 每月 10 USDT 转链上单位
      console.log(`订阅 ${months} 个月需要支付的 USDT 数量为: ${formattedAmount.toString()}`);
  
      // Step 1: 检查当前 USDT Allowance
      console.log('检查当前 USDT Allowance...');
      const allowanceQuery = await usdtContract.query['psp22::allowance'](
        senderAddress,
        {
          gasLimit: api.registry.createType('WeightV2', {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: null,
        },
        senderAddress,
        d9MerchantMiningAddress
      );
  
      if (allowanceQuery.result.isErr) {
        console.error('Allowance 查询失败:', allowanceQuery.result.asErr.toHuman());
        throw new Error('Allowance 查询失败');
      }
  
      // 提取 Allowance 值
      let currentAllowance = allowanceQuery.output?.toJSON().ok;
      if (currentAllowance && typeof currentAllowance === 'object' && 'Ok' in currentAllowance) {
        currentAllowance = BigInt(currentAllowance.Ok.replace(/,/g, ''));
      } else {
        currentAllowance = BigInt(0);
      }
      console.log(`当前 Allowance 为: ${currentAllowance.toString()}`);
  
      // Step 2: 如果 Allowance 不足，设置新的 Allowance
      if (currentAllowance < formattedAmount) {
        console.log('设置新的 USDT Allowance...');
        const setAllowanceTx = await usdtContract.tx['psp22::approve'](
          {
            gasLimit: api.registry.createType('WeightV2', {
              refTime: BigInt(50_000_000_000),
              proofSize: BigInt(800_000),
            }),
            storageDepositLimit: null,
          },
          d9MerchantMiningAddress,
          formattedAmount
        );
  
        // 签名并发送设置 Allowance 交易
        await new Promise((resolve, reject) => {
          setAllowanceTx.signAndSend(sender, ({ status, dispatchError }) => {
            if (dispatchError) {
              console.error('Allowance 设置失败:', dispatchError.toHuman());
              reject(new Error('Allowance 设置失败'));
            } else if (status.isInBlock) {
              console.log('Allowance 设置已包含在区块中:', status.asInBlock.toString());
            } else if (status.isFinalized) {
              console.log('Allowance 设置已完成:', status.asFinalized.toString());
              resolve();
            }
          });
        });
      } else {
        console.log('当前 Allowance 已满足，无需重新设置');
      }
  
      // Step 3: 调用订阅商家码合约方法
      console.log(`发起订阅 ${months} 个月的交易...`);
      const subscribeTx = await merchantContract.tx['subscribe'](
        {
          gasLimit: api.registry.createType('WeightV2', {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: null,
        },
        months // 订阅的月数
      );
  
      // 签名并发送订阅交易
      await new Promise((resolve, reject) => {
        subscribeTx.signAndSend(sender, ({ status, dispatchError }) => {
          if (dispatchError) {
            console.error('订阅交易失败:', dispatchError.toHuman());
            reject(new Error('订阅商家码失败'));
          } else if (status.isInBlock) {
            console.log('订阅交易已包含在区块中:', status.asInBlock.toString());
          } else if (status.isFinalized) {
            console.log('订阅商家码成功，区块状态:', status.asFinalized.toString());
            resolve();
          }
        });
      });
    } catch (error) {
      console.error('订阅商家码失败:', error);
      throw error;
    }
  }

// 赠送绿积分
export async function giveGreenPoints(senderMnemonic, toAddress, usdtAmount) {
    try {
      // 确保连接到 Polkadot 网络
      const api = await connectToPolkadot();
  
      // 获取 USDT 合约实例和 MerchantMining 合约实例
      const usdtContract = await getPSP22ContractInstance();
      const merchantContract = await getD9MerchantMiningContractInstance();
  
      // 创建账户
      const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
      const sender = keyring.addFromUri(senderMnemonic);
      const senderAddress = sender.address;
  
      // 转换 USDT 数量为链上单位
      const formattedAmount = api.registry.createType('u128', usdtAmount);
  
      // 检查和设置 Allowance
      console.log('检查和设置 USDT Allowance...');
      const allowanceQuery = await usdtContract.query['psp22::allowance'](
        senderAddress,
        {
          gasLimit: api.registry.createType('WeightV2', {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: null,
        },
        senderAddress,
        merchantContract.address
      );
  
      let currentAllowance = allowanceQuery.output?.toJSON().ok;
      if (currentAllowance && typeof currentAllowance === 'object' && 'Ok' in currentAllowance) {
        currentAllowance = BigInt(currentAllowance.Ok.replace(/,/g, ''));
      } else {
        currentAllowance = BigInt(0);
      }
      console.log(`当前 Allowance 为: ${currentAllowance.toString()}`);
  
      // 如果 Allowance 不足，设置新的 Allowance
      if (currentAllowance < BigInt(usdtAmount)) {
        console.log('当前 Allowance 不足，设置新的 Allowance...');
        const setAllowanceTx = await usdtContract.tx['psp22::approve'](
          {
            gasLimit: api.registry.createType('WeightV2', {
              refTime: BigInt(50_000_000_000),
              proofSize: BigInt(800_000),
            }),
            storageDepositLimit: null,
          },
          merchantContract.address,
          formattedAmount
        );
  
        // 等待 Allowance 设置完成
        await new Promise((resolve, reject) => {
          setAllowanceTx.signAndSend(sender, ({ status, dispatchError }) => {
            if (dispatchError) {
              console.error('Allowance 设置失败:', dispatchError.toHuman());
              reject(new Error('Allowance 设置失败'));
            } else if (status.isInBlock) {
              console.log('Allowance 设置已包含在区块中:', status.asInBlock.toString());
            } else if (status.isFinalized) {
              console.log('Allowance 设置已完成:', status.asFinalized.toString());
              resolve(); // Allowance 设置成功，继续执行后续操作
            }
          });
        });
      } else {
        console.log('当前 Allowance 足够，无需设置');
      }
  
      // 执行赠送绿积分操作
      console.log(`赠送 ${usdtAmount} USDT 的绿积分到地址: ${toAddress}`);
      const givePointsTx = await merchantContract.tx['giveGreenPointsUsdt'](
        {
          gasLimit: api.registry.createType('WeightV2', {
            refTime: BigInt(50_000_000_000),
            proofSize: BigInt(800_000),
          }),
          storageDepositLimit: null,
        },
        toAddress,
        formattedAmount
      );
  
      // 签名并发送赠送交易
      await new Promise((resolve, reject) => {
        givePointsTx.signAndSend(sender, ({ status, dispatchError }) => {
          if (dispatchError) {
            console.error('赠送绿积分交易失败:', dispatchError.toHuman());
            reject(new Error('赠送绿积分失败'));
          } else if (status.isInBlock) {
            console.log('赠送绿积分交易已包含在区块中:', status.asInBlock.toString());
          } else if (status.isFinalized) {
            console.log('绿积分赠送成功，区块状态:', status.asFinalized.toString());
            resolve(); // 赠送完成
          }
        });
      });
    } catch (error) {
      console.error('赠送绿积分失败:', error);
      throw error;
    }
  }
  
  
  
  