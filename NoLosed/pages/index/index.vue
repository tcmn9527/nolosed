<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="jump">跳转</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello2'
		}
	},
	onLoad() {

	},
	methods: {
		jump () {
			console.log('点击了跳转按钮');
			uni.redirectTo({
				url:'/pages/editQrCode/editQrCode'
			})
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

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
