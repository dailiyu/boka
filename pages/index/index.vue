<template>
	<view class="content">
		<button @click="getBalance">获取余额</button>
		<button @click="handleTransfer">TEST Trans</button>
		<button @click="handleSwap">D92USDT</button>
		<button @click="handleUsdtToD9">swapUSDTToD9</button>
	</view>
</template>

<script>
	import { transfer,swapD9ToUSDT,getBalance,swapUSDTToD9 } from '@/polkadot.js';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			getBalance(){
				getBalance("vDeqMfuNbTvG9k8hwZyqxd6efFjTKFgCq8YLWPbMrrHqqT5");
			},
			
			async handleSwap() {
			  const senderMnemonic = 'execute tone panther miss gaze object capital bag north drop enact route'; // 替换为发送方助记词
			  const d9Amount = 5000000000000n; // D9 数量，单位为最小单位（如 wei）
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
				 const senderMnemonic = 'execute tone panther miss gaze object capital bag north drop enact route'; // 替换为发送方助记词
			    const d9Amount = 100n; // usdt 数量，单位为最小单位（如 wei）
				 try {
			    await swapUSDTToD9(senderMnemonic, d9Amount);
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
			async  handleTransfer() {
			  const senderMnemonic = 'execute tone panther miss gaze object capital bag north drop enact route'; // 替换为实际助记词
			  const receiverAddress = 'u9NbRPhkG36oHnNZd1L5hDkgYqUGme7iFQyaqvtJ363y99e'; // 替换为接收方地址
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
