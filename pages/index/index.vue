<template>
	<view class="content">
		<button @click="getBalance">获取余额</button>
		<button @click="handleTransfer">D9转账</button>
		<button @click="handleUsdtTransfer">usdt转账</button>
		<button @click="handleSwap">D9UtoSDT</button>
		<button @click="handleUsdtToD9">swapUSDTToD9</button>
		<button @click="handleGetRate">获取汇率</button>
		<button @click="handleGetContractsModuleMetadata">GetContractsModuleMetadata</button>
		<button @click="handleGetTotalIssuance">获取发币总量</button>
		<button @click="handleGetBlockHeight">根据哈希获取区块高度</button>
		<button @click="handleGetMerchantExpiry">获取商家码截止时间</button>
		<button @click="handleSubscribeMerchant">订阅商家码</button>
		<button @click="handleGiveGreenPoints">赠送绿积分</button>
	</view>
</template>

<script>
	import { transfer,swapD9ToUSDT,getBalance,swapUSDTToD9 ,transferUSDT} from '@/polkadot.js';
	import {getContractsModuleMetadata,getTotalIssuance,getBlockHeight,getD9AndUSDTReserves} from "../../services/metadata"
	import {getMerchantExpiry,subscribeMerchant,giveGreenPoints} from "../../services/merchant" 
	export default {
		data() {
			return {
				title: 'Hello',
				Mnemonic:'cup three attract oblige goddess road civil solar search glow envelope resemble',
				Mnemonic2:'blast curve early try fold fall plastic hobby donkey tomato crater diet',
				Address:'wGicbvbrvGia4RLJcbVuwmXe3yzkBAiHMwMgQWjixbRWypk',
				Address2:'xAjq5Tnikge24Uvg17NMs623BgwoLKwLw4ye5HvioimdnnF',
				Address3:'xp16SpiC59BHY4ppAoZeGRwR4x74DqRt2wKD8yHiTNaQB8z'
			}
		},
		onLoad() {
			
		},
		methods: {
			getBalance(){
				getBalance(this.Address);
			},
			handleGetBlockHeight(){
				getBlockHeight()
			},
			async handleSwap() {
			  const senderMnemonic = this.Mnemonic;// 替换为发送方助记词
			  const d9Amount = 15000000000000n; // D9 数量，单位为最小单位（如 wei）
			  try {
			    await swapD9ToUSDT(senderMnemonic, d9Amount);
			    uni.showToast({
			      title: 'Swap successful!',
			      icon: 'success'
			    });
			  } catch (error) {
				console.log(error)
			    uni.showToast({
			      title: 'Swap failed!',
			      icon: 'none'
			    });
			  }
			},
			async handleUsdtToD9(){
				 const senderMnemonic =thsi.Mnemonic; // 替换为发送方助记词
			    const d9Amount = 100n; // usdt 数量，单位为最小单位（如 wei）
				 try {
			    await swapUSDTToD9(senderMnemonic, d9Amount);
			   
			  } catch (error) {
				console.log(error)
			    uni.showToast({
			      title: 'Swap failed!',
			      icon: 'none'
			    });
			  }
			},
			async handleGetRate(){
				getD9AndUSDTReserves()
			},
			async  handleTransfer() {
			  const senderMnemonic = this.Mnemonic; // 替换为实际助记词
			  const receiverAddress = this.Address; // 替换为接收方地址
			  const amount = '1000.0000000000000'; // 10 DOT (以最小单位 Planck 为单位)
			  
			  try {
				const txHash = await transfer(senderMnemonic, receiverAddress, amount);
				console.log('Transaction Hash:', txHash);
				uni.showToast({
				  title: 'Transfer successful!',
				  icon: 'success'
				});
			  } catch (error) {
				uni.showToast({
				  title: 'Transfer failed!',
				  icon: 'none'
				});
			  }
			},
			async  handleUsdtTransfer() {
			  const senderMnemonic = this.Mnemonic; // 替换为实际助记词
			  const receiverAddress = this.Address2; // 替换为接收方地址
			  const amount = 100; // 10 DOT (以最小单位 Planck 为单位)
			  try {
			 await transferUSDT(senderMnemonic, receiverAddress, amount);
				uni.showToast({
				  title: 'Transfer successful!',
				  icon: 'success'
				});
			  } catch (error) {
				uni.showToast({
				  title: 'Transfer failed!',
				  icon: 'none'
				});
			  }
			},
			async handleGetContractsModuleMetadata(){
				await getContractsModuleMetadata()
			},
			async handleGetTotalIssuance(){
				await getTotalIssuance()
			},
			async handleGetMerchantExpiry(){
			 await getMerchantExpiry(this.Address3)
			},
			async handleSubscribeMerchant(){
				subscribeMerchant(this.Mnemonic2,1)
			},
			async handleGiveGreenPoints(){
			 await	giveGreenPoints(this.Mnemonic2,this.Address3,1)
			}
		}
	}
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
