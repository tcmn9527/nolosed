<template>
	<view class="content">
		<view class="subTitleParent">
			<span class="subTitle">请输入防丢信息:</span>
			<span class="rightMinBtn" @tap="showExample">查看范例</span>
		</view>
		<textarea class="editInfo" auto-height></textarea>
		<span class="subTitle">请输入联系电话:</span>
		<textarea class="editPhone"></textarea>
		<view class="btns">
			<button class="saveBtn">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgExample: [
					{
						msg: ""
					}
				],
				tmpTextarea1: "您好：\r\n这是我"
			}
		},
		methods: {
			showExample () {
				uni.redirectTo({
					url:'/pages/msgExamples/msgExamples'
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
	}
	.subTitleParent {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.rightMinBtn {
		border-bottom: 1px solid #0f80ff;
		font-size: 25rpx;
		font-weight: bold;
		color: #0f80ff;
		margin-top: 25rpx;
		margin-right: 20rpx;
	}
	.subTitle {
		font-size: 30rpx;
		color: black;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}
	.editInfo {
		min-height: 150rpx;
		border: 1rpx solid #000;
		width: calc(100% - 82rpx);
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		font-size: 30rpx;
		color: #000;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	.editPhone {
		height: 35rpx;
		border: 1px solid #000;
		width: calc(100% - 82rpx);
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		font-size: 30rpx;
		color: #000;
		border-radius: 10rpx;
		padding: 20rpx;
	}
	.btns {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 30rpx;
	}
	.saveBtn {
		border: 1rpx solid #000;
		border-radius: 30rpx;
		font-size: 30rpx;
		color: #000;
		padding: 0rpx 10rpx;
		line-height: 60rpx;
		min-width: 250rpx;
	}
	.saveBtn:hover {
		background-position: -30rpx -30rpx;
	}
	.saveBtn:active {
		background-position: -30rpx -30rpx;
	}
</style>
