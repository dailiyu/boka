import { ApiPromise, WsProvider } from '@polkadot/api';
import { BN } from '@polkadot/util';

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


export async function getAvailableVotingPower(userAddress) {
  try {
    const api = await connectToPolkadot();

    // 调用链上接口: d9NodeVoting.usersVotingInterests(userAddress)
    const result = await api.query.d9NodeVoting.usersVotingInterests(userAddress);

    if (result.isSome) {
      const votingPower = result.unwrap();
      console.log(`用户 ${userAddress} 的可投票数为:`, votingPower.toString());
      return votingPower.toString();
    } else {
      console.log(`用户 ${userAddress} 没有可投票数。`);
      return '0';
    }
  } catch (error) {
    console.error('获取可投票数时发生错误:', error);
    throw error;
  }
}
