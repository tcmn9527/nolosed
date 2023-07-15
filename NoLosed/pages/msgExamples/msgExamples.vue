<template>
	<view class="content">
		<scroll-view scroll-y="true">
			<view class="item" v-for="item in msgExamples" :key="item.id">
				<view class="titleView">
					<span class="titleText">范例{{item.id}}:</span>
					<button class="rightBtn" @click="select(item.msg)">应用</button>
				</view>
				<view class="line"></view>
				<textarea class="editView" v-html="item.msg" focus="false"
				:style="editViewHeight(item.height)"></textarea>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDialog: false,
				msgExamples: [
					{
						id: 1,
						msg: "<p>好心人您好：</p><p>&emsp;这是我女儿的防丢牌，我是孩子的妈妈，如果小孩不慎迷路走丢或者遇到其他任何意外，麻烦您给我打个电话，万分感谢，万分感谢，小孩的安全牵动全家人的心，祝您好人一生平安！</p>",
						height: "150rpx"
					},
					{
						id: 2,
						msg: "<p>好心人您好：</p><p>&emsp;这是家里老人的防丢牌，老人78岁了，脑子有点糊涂，如果您发现她迷路了或者遇到其他任何意外了，请帮忙给我打个电话，太感谢您了！</p><p>&emsp;老人有高血压，心脏病，上衣口袋有速效救心丸。</p>",
						height: "160rpx"
					},
					{
						id: 3,
						msg: "<p>好心人您好：</p><p>&emsp;这是我家狗狗的防丢牌，突然不知道跑到哪里去了，您如果看见狗狗了，麻烦给我打个电话，真是太感谢您了</p>",
						height: "95rpx"
					},
					{
						id: 4,
						msg: "<p>好心人您好：</p></p>&emsp;这是我家猫咪的防丢牌，它不小心走失了，您如果看见它了，能不能给我打个电话，必有重谢，好人一生平安！</p>",
						height: "95rpx"
					}
				]
			}
		},
		methods: {
			editViewHeight(heightValue) {
				return {
					height: heightValue
				};
			},
			select(msg) {
				console.log(msg);
			}
		}
	}
</script>

<style>
	::-webkit-scrollbar {
	  width: 0;
	  height: 0;
	  color: transparent;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
	}
	.item {
		width: calc(100% - 60rpx);
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		border: 1rpx solid #c6c6c6;
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.titleView {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 10rpx;
	}
	.titleText {
		font-size: 28rpx;
		color: #000;
		margin-left: 10rpx;
	}
	.rightBtn {
		border: 1rpx solid #0f80ff;
		border-radius: 30rpx;
		background-color: #0f80ff;
		font-size: 25rpx;
		color: #fff;
		padding: 0rpx 20rpx;
		line-height: 40rpx;
		height: 45rpx;
		margin-right: 10rpx;
	}
	.rightBtn:hover {
		background-color: #0c68cf;
	}
	.rightBtn:active {
		background-color: #0c68cf;
	}
	.line {
		width: 100%;
		height: 2rpx;
		background-color: #dedede;
		margin-top: 10rpx;
	}
	.editView {
		width: calc(100% - 20rpx);
		margin: 10rpx;
		font-size: 28rpx;
		color: #000;
		align-self: center;
	}
</style>
