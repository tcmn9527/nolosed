<template>
	<view class="page_style">
		<text class="title">{{title}}</text>
		<view class="info">
			<view class="info_title">
				<text>防丢信息</text>
			</view>
			<view class="info_content">
				<text>您好：这是挂在我孩子书包上的防丢码，我是孩子的妈妈，手机号150xxxxxxxx，如果小孩不慎走失或者遇到其他任何意外，麻烦您帮忙打我电话，万分感谢。祝您好人一生平安！</text>
				
			</view>
		</view>
		<textarea auto-height style="background-color: aquamarine;"
		v-model="tmpTextarea">
		</textarea>
		<button @click="showTextArea">显示富文本</button>
		<textarea auto-height
		v-html="tmpTextarea1"></textarea>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'queryQrCode',
				tmpTextarea: '',
				tmpTextarea1: ''
			}
		},
		methods: {
			showTextArea () {
				console.log(this.tmpTextarea);
				this.tmpTextarea1 = this.tmpTextarea.replace(/\n/g, '<br/>');
				this.tmpTextarea1 = this.tmpTextarea1.replace(/\r\n/g, '<br/>');
			}
		}
	}
</script>

<style>
	.page_style {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
	}
	.title {
		align-self: center;
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
