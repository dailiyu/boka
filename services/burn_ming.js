import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { BN } from '@polkadot/util';
import { Keyring } from '@polkadot/keyring';
import ABIBurnManager from '../ABIs/burn-manager.json'
import ABIBurnMining from "../ABIs/burn-mining.json"
import Decimal from 'decimal.js';
let globalBurned=null
let burnPortfolioData=null
let returnPercentData=null
const miningPoolAddresses = [
  'wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d', // main
  'vMEwWJwYbzgiKeLeu4RwiAd73GVvGijTywfEAbba3pzPiPC', // old one
  'zXB3VPHrnb9pzfJweLstBfmn5Xq3dEAFAbKKxTsQZg1entq', // new one
];

const burnManagerAddress='wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d'
const burnMiningAddress='v7DBDNUUz2hbWSFZz5MAc5irz9fsNV9VBSFNoUdEEte1aTj'

// 连接到 Polkadot 网络
let apiInstance = null;
async function connectToPolkadot() {
  if (apiInstance && apiInstance.isConnected) {
    console.log('已复用现有 Polkadot 连接。');
    return apiInstance;
  }
  const provider = new WsProvider('wss://mainnet.d9network.com:40300');
  apiInstance = await ApiPromise.create({ provider });
  console.log('成功连接到 Polkadot 网络。');
  return apiInstance;
}

// 获取BurnManager合约实例
async function getBurnManagerContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, ABIBurnManager, burnManagerAddress);
}

async function getBurnMiningContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, ABIBurnMining, burnMiningAddress);
}


// 获取单个矿池的余额
async function getPoolBalance(address) {
    try {
      const api = await connectToPolkadot();
  
      // 使用 api.derive.balances.all 获取地址余额
      const balance = await api.derive.balances.all(address);
      
      // 选择使用 freeBalance 作为余额
      if (!balance || !balance.freeBalance) {
        console.error(`矿池地址 ${address} 的余额信息无效，返回值为:`, balance);
        return new BN(0); // 返回 0 作为默认余额
      }
  
      console.log(`矿池地址 ${address} 的可用余额为: ${balance.freeBalance.toString()}`);
      return new BN(balance.freeBalance.toString()); // 转换为 BN 类型返回
    } catch (error) {
      console.error(`获取矿池 ${address} 的余额时出错:`, error);
      throw error;
    }
  }
  
  
  // 获取所有矿池的总余额
  export async function getTotalMiningPoolBalance() {
    try {
      console.log('开始获取所有矿池的总余额...');
  
      // 并行查询所有矿池地址的余额
      const balancePromises = miningPoolAddresses.map((address) => getPoolBalance(address));
      const balances = await Promise.all(balancePromises);
  
      // 使用 reduce 计算总余额
      const totalBalance = balances.reduce((total, balance) => total.add(balance), new BN(0));
      console.log(`所有矿池的总余额为: ${totalBalance.toString()}`);
      return totalBalance;
    } catch (error) {
      console.error('获取总矿池余额时出错:', error);
      throw error;
    }
  }



// 获取全球已销毁数量
export async function getGlobalBurned() {
  try {
    const api = await connectToPolkadot();
    const burnManagerContract = await getBurnManagerContractInstance();

    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    const { result, output } = await burnManagerContract.query.getTotalBurned(
      burnManagerAddress,
      { gasLimit, storageDepositLimit: null }
    );

    if (result.isOk) {
      const burnedAmount = BigInt(output.toHuman().Ok.replace(/,/g, ''));
      globalBurned=burnedAmount
      console.log('全球已销毁数量为:', burnedAmount.toString());
    } else {
      throw new Error('获取全球已销毁数量失败');
    }
  } catch (error) {
    console.error('获取全球已销毁数量时发生错误:', error);
    throw error;
  }
}

// 计算全球算力值（returnPercent）

 export async function calculateReturnPercent() {

    const a = new Decimal('892468002669400000000');
    const b = new Decimal('1000000000000');
    const networkBurned = a/b
    console.log(networkBurned)
  const firstThresholdAmount =new Decimal('200000000') ;  // 转换为 BigInt
  let percentage = 8/1000;  
  // 如果 networkBurned 小于或等于阈值，直接返回初始比例
  if (networkBurned <= firstThresholdAmount) {
    return  percentage
   console.log('percentage is',percentage)
  }
  // 计算超出阈值部分
  const excessAmount = Math.max(0, networkBurned - firstThresholdAmount)
  // 计算减少次数 (excessAmount / 100000000)，都转换成 BigInt
  const reductions =  Math.floor(excessAmount / 100000000) + 1

  // 应用减少，逐步将 percentage 除以 2
  for (let i = 0; i < reductions; i++) {
    percentage /= 2; // 使用 BigInt 进行除法
  }
  return  percentage.toString()
  console.log('return percentage is', percentage.toString());

}

//销毁
export async function burn(senderMnemonic,address,amount){

  const api = await connectToPolkadot();
   // 创建账户
        const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
        const sender = keyring.addFromUri(senderMnemonic);
        const senderAddress = sender.address;
    
  const tx=await api.tx.d9NodeVoting.addVotingInterest(
    address,
    burnManagerAddress,
    amount,
    burnMiningAddress,
  )
  console.log(tx)
  tx.signAndSend(sender, ({ status, dispatchError }) => {
    if (dispatchError) {
      console.error('burn失败:', dispatchError.toHuman());
    
    } else if (status.isInBlock) {
      console.log('burn交易已包含在区块中:', status.asInBlock.toString());
    } else if (status.isFinalized) {
      console.log('burn成功，区块状态:', status.asFinalized.toString());
    }
  });
}


// 获取用户的 BurnPortfolio 数据
export async function getBurnPortfolio(userAddress) {
  try {
    const api = await connectToPolkadot();
    const burnManagerContract = await getBurnManagerContractInstance();

    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 调用智能合约的 getPortfolio 方法
    const { result, output } = await burnManagerContract.query.getPortfolio(
      burnManagerAddress, // 合约调用的账户地址
      { gasLimit, storageDepositLimit: null }, // Gas 限制
      userAddress // 目标用户地址
    );

    // 处理返回结果
    if (result.isOk && output.toHuman().Ok) {
      const portfolioData = output.toHuman().Ok;

      // 格式化数据
      const burnPortfolio = {
        amountBurned: convertToD9(portfolioData.amountBurned.replace(/,/g, '')),//销毁总数量
        balanceDue: convertToD9(portfolioData.balanceDue.replace(/,/g, '')),//剩余产出总量
        balancePaid: convertToD9(portfolioData.balancePaid.replace(/,/g, '')),//总提币数
        lastBurn: portfolioData.lastBurn.time.replace(/,/g, ''),//最后销毁时间戳
        lastWithdrawal: portfolioData.lastWithdrawal.time.replace(/,/g, ''),//最后提取时间戳
      };
      burnPortfolioData=burnPortfolio
      console.log('用户 BurnPortfolio 数据:', burnPortfolio);
      return burnPortfolio;
    } else {
      throw new Error('获取 BurnPortfolio 失败或数据为空');
    }
  } catch (error) {
    console.error('获取 BurnPortfolio 数据时发生错误:', error);
    throw error;
  }
}

function convertToD9(value) {
  const D9_DECIMALS = new Decimal('1e12'); // D9 的最小单位是 10 的 12 次方

  // 将输入值转换为 Decimal 类型进行精确计算
  const d9Amount = new Decimal(value).dividedBy(D9_DECIMALS);

  // 使用 toFixed 确保结果没有多余的小数位（例如整数部分）
  return d9Amount.toFixed(); // 如果没有小数位会省略小数点
}


//计算基础产出
export async function calculateBaseExtraction() {
  const now = Date.now(); // 当前时间戳（毫秒）

  // 1. 获取 burnPortfolio 和 returnPercent
  let burnPortfolio = await getBurnPortfolio('xp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z');
  let returnPercent = await calculateReturnPercent();

  // console.log('burnPortfolio:', burnPortfolio, 'returnPercent:', returnPercent);

  // 2. 确定最后交互时间：取 lastBurn 和 lastWithdrawal 的最大值
  const lastInteractionTimestamp = Math.max(
    Number(burnPortfolio.lastBurn),
    Number(burnPortfolio.lastWithdrawal)
  );

  // 3. 计算从最后交互到现在的天数
  const daysSinceLastAction = new Decimal((now - lastInteractionTimestamp) / (1000 * 60 * 60 * 24)).floor();
  console.log('最后交互时间:', lastInteractionTimestamp, '当前时间:', now, '相隔天数:', daysSinceLastAction.toString());

  // 4. 转换已烧毁数量为 Decimal 类型
  const amountBurned = new Decimal(burnPortfolio.amountBurned);

  // 5. 计算日提取额度
  const dailyAllowance = amountBurned.times(returnPercent);

  // 6. 计算总提取额度，确保非负值
  const totalAllowance = Decimal.max(dailyAllowance.times(daysSinceLastAction), 0);
  console.log('基础产出累积',totalAllowance.toFixed(4))
  // 7. 返回结果，精确到 4 位小数
  return totalAllowance.toFixed(4);
}

//获取推荐加成（加速累积）
export async function getReferralBoost(userAddress) {
  try {
    const api = await connectToPolkadot();
    const burnMiningContract = await getBurnMiningContractInstance();

    // 设置 Gas 限制
    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 调用智能合约的 getAccount 方法
    const { result, output } = await burnMiningContract.query.getAccount(
      burnMiningAddress, // 合约调用地址
      { gasLimit, storageDepositLimit: null }, // Gas 限制
      userAddress // 目标用户地址
    );

    // 处理返回结果
    if (result.isOk && output.toHuman().Ok) {
      const accountData = output.toHuman().Ok;

      // 提取 referralBoost 系数数组
      const referralBoostCoefficients = accountData.referralBoostCoefficients.map((val) =>
        convertToD9(val.replace(/,/g, ''))
      );

      // 计算推荐加成值：系数0 * 0.1 + 系数1 * 0.01
      const referralBoost = new Decimal(referralBoostCoefficients[0])
        .times(0.1)
        .plus(new Decimal(referralBoostCoefficients[1]).times(0.01));

      console.log('推荐加成值:', referralBoost.toFixed(4));
      return referralBoost.toFixed(4); // 返回推荐加成值，保留 4 位小数
    } else {
      throw new Error('获取推荐加成失败或数据为空');
    }
  } catch (error) {
    console.error('获取推荐加成时发生错误:', error);
    throw error;
  }
}


export async function executeWithdraw(senderMnemonic) {
  try {
    const api = await connectToPolkadot();
    const burnManagerContract = await getBurnManagerContractInstance();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    console.log('开始提取操作，用户地址:', senderAddress);

    // 设置 Gas 限制
    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 调用合约构建提取交易，并传入所需的参数（例如调用者地址）
    const withdrawTx = burnManagerContract.tx['withdraw'](
      { gasLimit, storageDepositLimit: null }, // Gas 参数
      senderAddress // 参数：调用者地址
    );

    // 签名并发送交易
    const unsub = await withdrawTx.signAndSend(sender, ({ status, dispatchError }) => {
      if (dispatchError) {
        console.error('提取失败:', dispatchError.toHuman());
      } else if (status.isInBlock) {
        console.log('提取交易已包含在区块中:', status.asInBlock.toString());
      } else if (status.isFinalized) {
        console.log('提取成功，区块状态:', status.asFinalized.toString());
        unsub(); // 停止监听
      }
    });
  } catch (error) {
    console.error('提取操作时发生错误:', error);
    throw error;
  }
}