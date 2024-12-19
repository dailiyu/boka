import { ApiPromise, WsProvider } from '@polkadot/api';
import { BN } from '@polkadot/util';
import { Keyring } from '@polkadot/keyring';
import ABINodeReward from '../ABIs/node-reward.json'
import { ContractPromise } from '@polkadot/api-contract';
import { customRpc } from '../customRPC'
const nodeRewardAddress='xqDsmMNZsCprGkjG6JPCQYysvdBs5GvudLzkXt73BbysX6D'

// 连接到 Polkadot 网络
let apiInstance = null;
async function connectToPolkadot() {
  if (apiInstance && apiInstance.isConnected) {
    console.log('已复用现有 Polkadot 连接。');
    return apiInstance;
  }
  const provider = new WsProvider('wss://mainnet.d9network.com:40300');
    apiInstance = await ApiPromise.create({ provider:provider,rpc:customRpc });
  console.log('成功连接到 Polkadot 网络。');
  return apiInstance;
}


//获取NodeReward实例
async function getNodeRewardContractInstance() {
  const api = await connectToPolkadot();
  return new ContractPromise(api, ABINodeReward, nodeRewardAddress);
}

//获取可投票数和已投票数
export async function getAvailableVotingPower(userAddress) {
  try {
    const api = await connectToPolkadot();

    // 调用链上接口: d9NodeVoting.usersVotingInterests(userAddress)
    const result = await api.query.d9NodeVoting.usersVotingInterests(userAddress);

    if (result.isSome) {
      const votingPower = result.unwrap();
      console.log(`用户 ${userAddress} 的可投票数为:`, votingPower.total.toString());
      console.log(`用户 ${userAddress} 的已投票数为:`, votingPower.delegated.toString());
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



// 获取我的节点奖励
export async function getMyNodeReward(userAddress, nodeId) {
  try {
    const api = await connectToPolkadot();
    const contract = await getNodeRewardContractInstance();

    console.log(`查询节点奖励，用户地址: ${userAddress}, 节点ID: ${nodeId}`);
    const gasLimit = api.registry.createType('WeightV2', {
      refTime: BigInt(50_000_000_000),
      proofSize: BigInt(800_000),
    });

    // 调用合约方法: getNodeRewardData
    const { gasRequired, result, output } = await contract.query.getNodeRewardData(
      userAddress,
      {
        gasLimit, // 使用默认 gasLimit
        storageDepositLimit: null, // 可根据需要调整
      },
      nodeId
    );

    if (result.isOk && output) {
      const rewardData = output.toHuman();
      console.log(`用户 ${userAddress} 的节点奖励为:`, rewardData);
      return rewardData;
    } else {
      console.error('查询节点奖励失败:', result);
      return null;
    }
  } catch (error) {
    console.error('获取节点奖励时发生错误:', error);
    throw error;
  }
}



// 提取节点奖励// 提取节点奖励
export async function claimNodeReward(senderMnemonic, nodeId) {
  try {
    const api = await connectToPolkadot();
    const contract = await getNodeRewardContractInstance();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);
    const senderAddress = sender.address;

    console.log(`提取节点奖励，用户地址: ${senderAddress}, 节点ID: ${nodeId}`);
    const tx = contract.tx['withdrawReward'](
      {
        gasLimit: api.registry.createType('WeightV2', {
          refTime: BigInt(50_000_000_000),
          proofSize: BigInt(800_000),
        }),
        storageDepositLimit: null,
      },
      nodeId
    );

    // 签名并发送交易
    tx.signAndSend(sender, ({ status, dispatchError }) => {
      if (dispatchError) {
        console.error('提取节点奖励失败:', dispatchError.toHuman());
      } else if (status.isInBlock) {
        console.log('提取节点奖励交易已包含在区块中:', status.asInBlock.toString());
      } else if (status.isFinalized) {
        console.log('提取节点奖励成功，区块状态:', status.asFinalized.toString());
      }
    });
  } catch (error) {
    console.error('提取节点奖励时发生错误:', error);
    throw error;
  }
}

// 获取节点列表函数
export async function getNodeList() {
  try {
    const api = await connectToPolkadot();

    // 调用自定义 RPC 方法获取候选节点列表
    const candidates = await api.rpc.voting.getSortedCandidates();

    // 遍历候选节点，获取其元数据
    const nodeList = await Promise.all(
      candidates.toJSON().map(async ([address, votes]) => {
        const metadata = await api.query.d9NodeVoting.nodeMetadata(address);
        const struct = metadata.unwrapOr(null);

        if (struct) {
          return {
            address,
            votes: new BN(votes).toString(),
            name: struct.name.isUtf8 ? struct.name.toUtf8() : struct.name.toString(),
            sharingPercent: struct.sharingPercent.toNumber(),
            indexOfLastPercentChange: struct.indexOfLastPercentChange.toNumber(),
          };
        } else {
          return null;
        }
      })
    );

    // 过滤掉无效节点
    const validNodeList = nodeList.filter(node => node !== null);

    console.log('获取的节点列表:', validNodeList);
    return validNodeList;
  } catch (error) {
    console.error('获取节点列表时发生错误:', error);
    throw error;
  }
}


//投票
export async function vote(senderMnemonic, candidateAddress, votes) {
  try {
    const api = await connectToPolkadot();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);

    console.log(`用户地址: ${sender.address}, 给候选人 ${candidateAddress} 投票: ${votes} 票`);

    // 创建投票交易
    const tx = api.tx.d9NodeVoting.delegateVotes([
      { candidate: candidateAddress, votes: new BN(votes) },
    ]);

    // 签名并发送交易
    await new Promise((resolve, reject) => {
      tx.signAndSend(sender, ({ status, dispatchError }) => {
        if (dispatchError) {
          console.error('投票失败:', dispatchError.toHuman());
          reject(dispatchError);
        } else if (status.isInBlock) {
          console.log('投票交易已包含在区块中:', status.asInBlock.toString());
          resolve();
        } else if (status.isFinalized) {
          console.log('投票交易成功，区块状态:', status.asFinalized.toString());
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('执行投票时发生错误:', error);
    throw error;
  }
}


//获取已投票列表
export async function getUserVotedList(userAddress) {
  if (!userAddress) {
    console.warn('No active address found.');
    return [];
  }

  try {
    const api = await connectToPolkadot();

    // 获取用户的投票数据
    const entries = await api.query.d9NodeVoting.userToNodeVotesTotals.entries(userAddress);

    // 获取节点元数据并格式化结果
    const votedNodes = await Promise.all(
      entries.map(async ([storageKey, votes]) => {
        const [, nodeAddress] = storageKey.args.map(k => k.toString());
        const metadata = await api.query.d9NodeVoting.nodeMetadata(nodeAddress);
        const struct = metadata.unwrapOr(null);

        return {
          node: nodeAddress,
          votes: new BN(votes).toNumber(),
          name: struct ? (struct.name.isUtf8 ? struct.name.toUtf8() : struct.name.toString()) : nodeAddress,
        };
      })
    );

    console.log('用户已投票的节点列表:', votedNodes);
    return votedNodes;
  } catch (error) {
    console.error('获取用户已投票列表时发生错误:', error);
    throw error;
  }
}


//撤销投票
export async function removeVotes(senderMnemonic, candidateAddress, votes, currentVotes) {
  if (votes > currentVotes || votes <= 0) {
    throw new Error('票数无效，无法撤销。');
  }

  try {
    const api = await connectToPolkadot();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);

    console.log(`用户地址: ${sender.address}, 撤销 ${votes} 票, 目标候选人: ${candidateAddress}`);

    // 创建撤销投票交易
    const tx = api.tx.d9NodeVoting.tryRemoveVotesFromCandidate(candidateAddress, votes);

    // 签名并发送交易
    await new Promise((resolve, reject) => {
      tx.signAndSend(sender, ({ status, dispatchError }) => {
        if (dispatchError) {
          console.error('撤销投票失败:', dispatchError.toHuman());
          reject(dispatchError);
        } else if (status.isInBlock) {
          console.log('撤销投票交易已包含在区块中:', status.asInBlock.toString());
          resolve();
        } else if (status.isFinalized) {
          console.log('撤销投票交易成功，区块状态:', status.asFinalized.toString());
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('撤销投票时发生错误:', error);
    throw error;
  }
}


//修改节点名称
export async function changeNodeName(senderMnemonic, newName) {
  if (!newName || typeof newName !== 'string') {
    throw new Error('节点名称无效。');
  }

  try {
    const api = await connectToPolkadot();

    // 创建账户
    const keyring = new Keyring({ type: 'sr25519', ss58Format: 9 });
    const sender = keyring.addFromUri(senderMnemonic);

    console.log(`用户地址: ${sender.address}, 修改节点名称为: ${newName}`);

    // 创建修改节点名称交易
    const tx = api.tx.d9NodeVoting.changeCandidateName(newName);

    // 签名并发送交易
    await new Promise((resolve, reject) => {
      tx.signAndSend(sender, ({ status, dispatchError }) => {
        if (dispatchError) {
          console.error('修改节点名称失败:', dispatchError.toHuman());
          reject(dispatchError);
        } else if (status.isInBlock) {
          console.log('修改节点名称交易已包含在区块中:', status.asInBlock.toString());
          resolve();
        } else if (status.isFinalized) {
          console.log('修改节点名称成功，区块状态:', status.asFinalized.toString());
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('修改节点名称时发生错误:', error);
    throw error;
  }
}


