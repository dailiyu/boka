<template>
  <view class="content">
    <button @click="getBalance">获取余额</button>
    <button @click="handleTransfer">D9转账</button>
    <button @click="handleUsdtTransfer">usdt转账</button>
    <button @click="handleSwap">D9UtoSDT</button>
    <button @click="handleUsdtToD9">swapUSDTToD9</button>
    <button @click="handleGetRate">获取汇率</button>
    <button @click="handleGetContractsModuleMetadata">
      GetContractsModuleMetadata
    </button>
    <button @click="handleGetTotalIssuance">获取发币总量</button>
    <button @click="handleGetBlockHeight">根据哈希获取区块高度</button>
    <button @click="handleGetMerchantExpiry">获取商家码截止时间</button>
    <button @click="handleSubscribeMerchant">订阅商家码</button>
    <button @click="handleGiveGreenPoints">赠送绿积分</button>
    <button @click="handleGetGreenPointsNumber">
      获取积分积分数据(绿积分，最后兑换时间)
    </button>
    <button @click="handleCalRedPoints">获得积分数据后计算红积分数量</button>
    <button @click="handleRedmeD9">积分兑换D9</button>
    <button @click="handleGetTotalMiningPoolBalance">获取矿池总数量</button>
    <button @click="handleGetGlobalBurned">获取全球已销毁数量</button>
    <button @click="handleGetReturnPercent">获取全球算力值</button>
    <button @click="handleBurn">销毁矿</button>
    <button @click="handleGetBurnPortfolio">获取BurnPortfolio</button>
    <button @click="handleBaseExtraction">获取基础产出</button>
    <button @click="handleReferralBoost">获取加速产出</button>
    <button @click="handleWithdraw">提取</button>
    <button @click="handleAvailableVotingPower">获取可投票数</button>
    <button @click="handleMyNodeReward">获取节点奖励</button>
    <button @click="handleclaimNodeReward">提取节点奖励</button>
    <button @click="handleGetNodeList">获取节点列表</button>
    <button @click="handleVote">投票</button>
    <button @click="handleUserVotedList">获取已投票列表</button>
    <button @click="handleRemoveVotes">撤销投票</button>
    <button @click="handlechangeNodeName">修改节点名称</button>
    <button @click="handleGetTrade24H">获取交易数据</button>
    <button @click="handleGetMarketConversions">获取市场兑换数据</button>
    <button @click="handleGetD9Transfers24H">获取D9转账记录</button>
    <button @click="handleAddLiquidity">增加流动性</button>
    <button @click="handleRemoveLiquidity">移除流动性</button>
  </view>
</template>

<script>
import {
  transfer,
  swapD9ToUSDT,
  getBalance,
  swapUSDTToD9,
  transferUSDT,
  addLiquidity,
  removeLiquidity
} from "@/polkadot.js";
import {
  getContractsModuleMetadata,
  getTotalIssuance,
  getBlockHeight,
  getD9AndUSDTReserves,
} from "../../services/metadata";
import {
  getMerchantExpiry,
  subscribeMerchant,
  giveGreenPoints,
  getGreenPointsAccount,
  calculateRedPoints,
  redeemD9,
} from "../../services/merchant";
import {
  getTotalMiningPoolBalance,
  getGlobalBurned,
  calculateReturnPercent,
  burn,
  getBurnPortfolio,
  calculateBaseExtraction,
  getReferralBoost,
  executeWithdraw,
} from "../../services/burn_ming.js";
import {
  getAvailableVotingPower,
  getMyNodeReward,
  claimNodeReward,
  getNodeList,
  vote,
  getUserVotedList,
  removeVotes,
  changeNodeName,
} from "../../services/node_voting.js";
import {
  getTrade24H,
  getMarketConversions,
  getTransfers,
} from "../../services/index_gql.js";

export default {
  data() {
    return {
      title: "Hello",
      Mnemonic:
        "cup three attract oblige goddess road civil solar search glow envelope resemble",
      Mnemonic2:
        "blast curve early try fold fall plastic hobby donkey tomato crater diet",
      Address: "wGicbvbrvGia4RLJcbVuwmXe3yzkBAiHMwMgQWjixbRWypk",
      Address2: "xAjq5Tnikge24Uvg17NMs623BgwoLKwLw4ye5HvioimdnnF",
      Address3: "xp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z",
    };
  },
  onLoad() {},
  methods: {
    getBalance() {
      getBalance(this.Address);
    },
    handleGetBlockHeight() {
      getBlockHeight();
    },
    async handleSwap() {
      const d9Amount = 1000000000000n; // D9 数量，单位为最小单位（如 wei）
      try {
        await swapD9ToUSDT(this.Mnemonic2, d9Amount);
        uni.showToast({
          title: "Swap successful!",
          icon: "success",
        });
      } catch (error) {
        console.log(error);
        uni.showToast({
          title: "Swap failed!",
          icon: "none",
        });
      }
    },
    async handleUsdtToD9() {
      const senderMnemonic = thsi.Mnemonic; // 替换为发送方助记词
      const d9Amount = 100n; // usdt 数量，单位为最小单位（如 wei）
      try {
        await swapUSDTToD9(senderMnemonic, d9Amount);
      } catch (error) {
        console.log(error);
        uni.showToast({
          title: "Swap failed!",
          icon: "none",
        });
      }
    },
    async handleGetRate() {
      getD9AndUSDTReserves();
    },
    async handleTransfer() {
      const senderMnemonic = this.Mnemonic; // 替换为实际助记词
      const receiverAddress = this.Address; // 替换为接收方地址
      const amount = "1000.0000000000000"; // 10 DOT (以最小单位 Planck 为单位)

      try {
        const txHash = await transfer(senderMnemonic, receiverAddress, amount);
        console.log("Transaction Hash:", txHash);
        uni.showToast({
          title: "Transfer successful!",
          icon: "success",
        });
      } catch (error) {
        uni.showToast({
          title: "Transfer failed!",
          icon: "none",
        });
      }
    },
    async handleUsdtTransfer() {
      const senderMnemonic = this.Mnemonic; // 替换为实际助记词
      const receiverAddress = this.Address2; // 替换为接收方地址
      const amount = 100; // 10 DOT (以最小单位 Planck 为单位)
      try {
        await transferUSDT(senderMnemonic, receiverAddress, amount);
        uni.showToast({
          title: "Transfer successful!",
          icon: "success",
        });
      } catch (error) {
        uni.showToast({
          title: "Transfer failed!",
          icon: "none",
        });
      }
    },
    async handleGetContractsModuleMetadata() {
      await getContractsModuleMetadata();
    },
    async handleGetTotalIssuance() {
      await getTotalIssuance();
    },
    async handleGetMerchantExpiry() {
      await getMerchantExpiry(this.Address3);
    },
    async handleSubscribeMerchant() {
      subscribeMerchant(this.Mnemonic2, 1);
    },
    async handleGiveGreenPoints() {
      await giveGreenPoints(this.Mnemonic2, this.Address3, 1);
    },
    async handleGetGreenPointsNumber() {
      getGreenPointsAccount("uCJQa68qZoLB9FBFPmFBLN8naukx1B8nhpSMdquzVwxMAzH");
    },
    async handleCalRedPoints() {
      calculateRedPoints();
    },
    async handleRedmeD9() {
      redeemD9(this.Mnemonic2);
    },
    async handleGetTotalMiningPoolBalance() {
      try {
        console.log("开始计算总矿池余额...");
        const totalBalance = await getTotalMiningPoolBalance();
        console.log(`最终总矿池余额为: ${totalBalance}`);
      } catch (error) {
        console.error("计算总矿池余额失败:", error);
      }
    },
    async handleGetGlobalBurned() {
      getGlobalBurned();
    },
    async handleGetReturnPercent() {
      calculateReturnPercent();
    },
    async handleBurn() {
      burn(this.Mnemonic2, this.Address3, 100000000000);
    },
    async handleGetBurnPortfolio() {
      getBurnPortfolio(this.Address3);
    },
    async handleBaseExtraction() {
      calculateBaseExtraction();
    },
    async handleReferralBoost() {
      getReferralBoost(this.Address3);
    },
    async handleWithdraw() {
      executeWithdraw(this.Mnemonic2);
    },
    async handleAvailableVotingPower() {
      getAvailableVotingPower(this.Address3);
    },
    async handleMyNodeReward() {
      getMyNodeReward(this.Address3, this.Address3);
    },
    async handleclaimNodeReward() {
      claimNodeReward(this.Mnemonic2, this.Address3);
    },
    async handleGetNodeList() {
      getNodeList();
    },
    async handleVote() {
      vote(
        this.Mnemonic2,
        "xQFMWQVMQ2FkgXyVwA6n8ZRCCVmjAB2hg29Fak5UqhjcM8E",
        10
      );
    },
    async handleUserVotedList() {
      getUserVotedList(this.Address3);
    },
    async handleRemoveVotes() {
      removeVotes(
        this.Mnemonic2,
        "zX3ATUJrRHkMUwgRZM88b8SEctCAMUhfYkHqV5zL1ZEqVfZ",
        1,
        100
      );
    },
    async handlechangeNodeName() {
      changeNodeName(this.Mnemonic2, "newName");
    },
    async handleGetTrade24H() {
      getTrade24H();
    },
    async handleGetMarketConversions() {
      getMarketConversions();
    },
    async handleGetD9Transfers24H() {
      const TOKEN_ENUM = Object.freeze({
        D9: "D9",
        USDT: "USDT",
      });
      // 调用函数时传入枚举值
      const token = TOKEN_ENUM.D9;
      getTransfers(this.Address3, token);
    },
    async handleAddLiquidity(){
      addLiquidity(this.Mnemonic,20,1.72)
    },
    async handleRemoveLiquidity(){
      removeLiquidity(this.Mnemonic)
    }
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
