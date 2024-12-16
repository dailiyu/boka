import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { BN } from '@polkadot/util';
import ABIBurnManager from '../ABIs/burn-manager.json'

const miningPoolAddresses = [
  'wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d', // main
  'vMEwWJwYbzgiKeLeu4RwiAd73GVvGijTywfEAbba3pzPiPC', // old one
  'zXB3VPHrnb9pzfJweLstBfmn5Xq3dEAFAbKKxTsQZg1entq', // new one
];

const burnManagerAddress='wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d'


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


  // 获取全球已销毁数量的函数
export async function getGlobalBurned() {
    try {
      console.log('开始查询全球已销毁数量...');
      const api = await connectToPolkadot();
      const burnManagerContract = await getBurnManagerContractInstance();
  
      // 设置调用参数
      const gasLimit = api.registry.createType('WeightV2', {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      });
  
      // 调用合约方法 'getTotalBurned'
      const { result, output } = await burnManagerContract.query.getTotalBurned(
        burnManagerAddress, // 调用者的地址
        {
          gasLimit,
          storageDepositLimit: null,
        }
      );
  
      // 检查结果
      if (result.isOk) {
        const burnedAmount = BigInt(output.toHuman().Ok.replace(/,/g, '')); // 解析返回值为 BigInt
        console.log('全球已销毁数量为:', burnedAmount.toString());
        return burnedAmount; // 返回已销毁数量
      } else {
        console.error('调用 getTotalBurned 失败:', result.asErr.toHuman());
        throw new Error('获取全球已销毁数量失败');
      }
    } catch (error) {
      console.error('获取全球已销毁数量时发生错误:', error);
      throw error;
    }
  }
  