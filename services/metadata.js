import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { Keyring } from '@polkadot/keyring';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import marketMakerAbi from '../marketMakerAbi.json'; // 市场做市合约 ABI
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


export  async function getContractsModuleMetadata() {
    try {
      const api = await connectToPolkadot();  // 获取 api 实例
      const metadata = await api.rpc.state.getMetadata();  // 获取链的 metadata
      console.log(metadata.asLatest.pallets.toHuman())
      return metadata.asLatest.pallets[13];  // 返回对应的 pallet 信息
    } catch (error) {
      console.error('Error fetching contract module metadata:', error);
      throw error;  // 将错误抛出，方便外部捕获
    }
  }


  export  async function getTotalIssuance() {
    try {
      const api = await connectToPolkadot();  // 获取 api 实例
      const totalIssuance = await api.query.balances.totalIssuance();  // 获取总发行量
      console.log(totalIssuance.toHuman());
      return totalIssuance;  // 返回获取到的总发行量
    } catch (error) {
      console.error('Error fetching total issuance:', error);
      throw error;  // 将错误抛出，方便外部捕获
    }
  }
  
  // 根据哈希获取区块高度方法
  export async function getBlockHeight() {
    try {
     
      const api = await connectToPolkadot();  // 获取 API 实例
      const latestBlockHash = await api.rpc.chain.getBlockHash();
      console.log('最新区块哈希:', latestBlockHash.toHuman());
      const block = await api.rpc.chain.getBlock(latestBlockHash);  // 获取区块数据
      console.log('区块数据:', block.toHuman());  // 打印出返回的区块数据，查看是否有错误
      const blockHeight = block.block.header.number.toNumber();  // 获取区块高度
      console.log(`区块高度: ${blockHeight}`);
      return blockHeight;  // 返回区块高度
    } catch (error) {
      console.error('获取区块高度失败:', error);
      throw new Error(`获取区块高度失败: ${error.message}`);
    }
  }

// 获取 D9 和 USDT 储备量的方法
export async function getD9AndUSDTReserves() {
    try {
      // 1. 连接到 Polkadot 网络
      const api = await connectToPolkadot();
  
      // 2. 获取 Market-Maker 合约实例（假设储备量查询在 Market-Maker 合约中）
      const marketMakerContract = await getMarketMakerContractInstance();
  
      // 3. 设置 Gas 限制
      const gasLimit = api.registry.createType('WeightV2', {
        refTime: BigInt(50_000_000_000),
        proofSize: BigInt(800_000),
      });
  
      // 4. 查询储备量
      console.log('正在查询 D9 和 USDT 的储备量...');
      const { output, result } = await marketMakerContract.query['getCurrencyReserves'](
        null, // 调用方地址（可以为 null，视合约要求）
        { gasLimit, storageDepositLimit: null } // Gas 和存储限制
      );
  
      // 5. 检查结果
      if (result.isErr) {
        console.error('查询储备量失败:', result.asErr.toHuman());
        throw new Error('储备量查询失败');
      }
  
      if (output && output.isOk) {
        // 解析结果（根据链上合约返回的格式）
        const reserves = output.toHuman();
        console.log('D9储备量',reserves.Ok[0],' USDT 储备量是', reserves.Ok[1]);
        return reserves; // 返回储备量数据
      } else {
        console.error('储备量查询返回错误:', output?.asErr?.toString());
        return null;
      }
    } catch (error) {
      console.error('获取 D9 和 USDT 储备量失败:', error);
      throw error;
    }
  }
  


