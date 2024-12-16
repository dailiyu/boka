import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import marketMakerAbi from './marketMakerAbi.json'; // 市场做市合约 ABI
import d9UsdtAbi from './d9UsdtAbi.json'; // PSP22 合约 ABI
import { customRpc } from './customRPC'
import { BN, BN_ONE } from '@polkadot/util'
// 合约地址
const marketMakerContractAddress = 'z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg'; // Market-Maker 合约地址
const d9UsdtContractAddress = 'uLj9DRUujbpCyK7USZY5ebGbxdtKoWvdRvGyyUsoLWDsNng'; // PSP22 合约地址

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


// 获取 D9 余额的方法
export async function getBalance(accountAddress) {
  const api = await connectToPolkadot();
  const contract = await getPSP22ContractInstance(); // 确保调用的是正确的合约实例
  
  console.log("查询该地址余额："+accountAddress);
  // 调用 `balance_of` 方法，传递账户地址
  const { output, result } = await contract.query['psp22::balanceOf'](
    accountAddress, // 传入账户地址作为参数
    {
      storageDepositLimit: 0,
      gasLimit: api.registry.createType('WeightV2', { refTime: BigInt(50_000_000_000), proofSize: BigInt(800_000) }),
    },
    accountAddress
  );
  
  if (result.isErr) {
    console.error('调用合约查询失败:', result.asErr.toString());
    return null;
  }
  
  if (output && output.isOk) {
    const balance = output.toHuman(); // 转换为人类可读格式
    console.log('USDT余额:', balance);
	
	const accountInfo = await api.query.system.account(accountAddress);
	const freeBalance = accountInfo.data.free;
	
    console.log('D9余额:', freeBalance.toHuman());
  } else {
    console.error('查询余额失败:', output?.asErr?.toString());
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
  const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
  const sender = keyring.addFromUri(senderMnemonic);
  const childSender=keyring.addFromUri(senderMnemonic+'/1');
  console.log(childSender.address);
  
  // 手动设置 gas_limit
  const gasLimit = api.registry.createType('WeightV2', { refTime: BigInt(50_000_000_000), proofSize: BigInt(800_000) })

  const unsub = await contract.tx.getUsdt({
        value: d9Amount, // D9 转换的数量
        gasLimit: gasLimit, // 动态最大 Gas 限制
      }).signAndSend(childSender, ({ status }) => {
        if (status.isInBlock) {
          console.log('交易已包含在区块中:', status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log('交易已最终确认:', status.asFinalized.toString());
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

    console.log('转账成功，交易哈希:', hash.toHex());
    return hash.toHex();
  } catch (error) {
    console.error('转账失败:', error);
    throw error;
  }
}

// USDT 转账函数
export async function transferUSDT(senderMnemonic, receiverAddress, usdtAmount) {
  try {
    // 1. 连接到 Polkadot 网络
    const api = await connectToPolkadot();

    // 2. 获取 USDT 合约实例
    const usdtContract = await getPSP22ContractInstance();

    // 3. 创建发送者账户
    await cryptoWaitReady(); // 确保加密模块已准备就绪
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);

    // 4. 转账金额转换为链上单位
    const formattedAmount = api.registry.createType('u128', usdtAmount);

    // 5. 设置 Gas 限制
    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    console.log(`正在从 ${sender.address} 向 ${receiverAddress} 转账 ${usdtAmount} USDT`);

    // 6. 调用 USDT 合约的 transfer 方法
    const transferTx = usdtContract.tx['psp22::transfer'](
      { gasLimit, storageDepositLimit: null },
      receiverAddress, // 接收者地址
      formattedAmount, // 转账金额
      '0x0' // 附加数据（这里为空）
    );

    // 7. 签名并发送交易
    const unsub = await transferTx.signAndSend(sender, ({ status, dispatchError }) => {
      if (status.isInBlock) {
        console.log('交易已包含在区块中:', status.asInBlock.toString());
      } else if (status.isFinalized) {
        console.log('交易已最终确认:', status.asFinalized.toString());
        unsub(); // 取消订阅
      }

      // 检查是否有错误
      if (dispatchError) {
        if (dispatchError.isModule) {
          const decoded = api.registry.findMetaError(dispatchError.asModule);
          const { section, name, docs } = decoded;
          console.error(`交易失败: ${section}.${name}: ${docs.join(' ')}`);
        } else {
          console.error('交易失败:', dispatchError.toString());
        }
      }
    });

    console.log('USDT 转账成功');
  } catch (error) {
    console.error('USDT 转账失败:', error);
    throw error;
  }
}



// 创建或导入账户
export async function createOrImportAccount(mnemonic) {
  await cryptoWaitReady();
  const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });

  if (mnemonic) {
    return keyring.addFromUri(mnemonic);
  } else {
    const newAccount = keyring.addFromUri(Keyring.generateMnemonic());
    console.log('生成的新账户助记词:', newAccount.meta.mnemonic);
    return newAccount;
  }
}



export async function swapUSDTToD9(senderMnemonic, usdtAmount) {
  try {


    // 加载 USDT 合约实例和 Market-Maker 合约实例
    const usdtContract = await getPSP22ContractInstance();
    const marketMakerContract = await getMarketMakerContractInstance();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    // 转换 USDT 数量为链上单位
    const formattedAmount = api.registry.createType('u128', usdtAmount);

    // Step 1: 检查和设置 Allowance
    console.log('检查和设置 USDT Allowance...');
    const allowanceQuery = await usdtContract.query['psp22::allowance'](
      senderAddress,
      {
        gasLimit: api.registry.createType('WeightV2', { refTime: new BN(5_000_000_000_000).isub(BN_ONE), proofSize: new BN(119903836479112) }),
        storageDepositLimit: null,
      },
      senderAddress,
      marketMakerContract.address
    );

    if (allowanceQuery.result.isErr) {
      console.error('Allowance 查询失败:', allowanceQuery.result.asErr.toHuman());
      throw new Error('Allowance 查询失败');
    }

    // 解析 Allowance 值
    let currentAllowance = allowanceQuery.output?.toJSON().ok;

    if (currentAllowance && typeof currentAllowance === 'object' && 'Ok' in currentAllowance) {
      currentAllowance = currentAllowance.Ok; // 提取 `Ok` 值
    }

    if (typeof currentAllowance === 'string') {
      currentAllowance = currentAllowance.replace(/,/g, ''); // 去掉逗号
    }
    console.log(`当前 Allowance 为: ${currentAllowance}`);

    currentAllowance = BigInt(currentAllowance);

    // 如果 Allowance 小于 USDT 数量，设置新的 Allowance
    if (currentAllowance < BigInt(usdtAmount)) {
      console.log('设置新的 Allowance...');
      const setAllowanceTx = await usdtContract.tx['psp22::approve'](
        {
          gasLimit: api.registry.createType('WeightV2', { refTime: BigInt(50_000_000_000), proofSize: BigInt(800_000) }),
          storageDepositLimit: api.registry.createType('Balance', 0), // 设置存储限制为 0
        },
        marketMakerContract.address,
        formattedAmount
      );

      const allowanceUnsub = await setAllowanceTx.signAndSend(sender, async ({ status }) => {
        if (status.isInBlock) {
          console.log('Allowance 交易已包含在区块中:', status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log('Allowance 设置成功:', status.asFinalized.toString());
          allowanceUnsub();
          
          // 在 Allowance 设置成功后执行兑换操作
          console.log(`准备将 ${usdtAmount} USDT 转换为 D9`);
          const gasLimit = api.registry.createType('WeightV2', { refTime: BigInt(50_000_000_000), proofSize: BigInt(800_000) });

          const swapTx = await marketMakerContract.tx['getD9'](
            {
              gasLimit,
              storageDepositLimit: null,
            },
            formattedAmount
          );

          const swapUnsub = await swapTx.signAndSend(sender, ({ status }) => {
            if (status.isInBlock) {
              console.log('交易已包含在区块中:', status.asInBlock.toString());
              uni.showToast({
                title: 'Swap successful!',
                icon: 'success'
              });
            } else if (status.isFinalized) {
              console.log('USDT 转 D9 成功，区块状态:', status.asFinalized.toString());
        
              swapUnsub();
            }
          });
        }
      });
    } else {
      console.log('当前 Allowance 已满足，无需重新设置');

      // 如果已经有足够的 Allowance，直接进行兑换
      console.log(`准备将 ${usdtAmount} USDT 转换为 D9`);
      const gasLimit = api.registry.createType('WeightV2', { refTime: BigInt(50_000_000_000), proofSize: BigInt(800_000) });

      const swapTx = await marketMakerContract.tx['getD9'](
        {
          gasLimit,
          storageDepositLimit: null,
        },
        formattedAmount
      );

      const swapUnsub = await swapTx.signAndSend(sender, ({ status }) => {
        if (status.isInBlock) {
          console.log('交易已包含在区块中:', status.asInBlock.toString());
        } else if (status.isFinalized) {
          console.log('USDT 转 D9 成功，区块状态:', status.asFinalized.toString());
          swapUnsub();
        }
      });
    }
  } catch (error) {
    console.error('USDT 转 D9 失败:', error);
    throw error;
  }
}



