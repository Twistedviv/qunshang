<template>
	<view class="wrapper" :style="{height:windowsHeight+'px'}">
		<view class="title">保存二维码发送给朋友扫码即可邀请</view>
		<view class="qrcode"></view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				windowsHeight:100
			}
		},
		created:function() {
			this.$store.commit('getWindowsHeight');
			this.windowsHeight = this.$store.state.windowsHeight;
			console.log("当前页面高度："+this.$store.state.windowsHeight);
		},
		methods: {
		
		}
	}
</script>

<style>
	.wrapper{
		width: 750rpx;
		background: url(../../../static/img/index/inviting/qrcode.jpg) no-repeat;
		background-size: contain;
		padding-top: 40%;

	}
	.title{
		width: 350rpx;
		font-size: 14px;
		margin: 0 auto;

	}
	.qrcode{
		width: 350rpx;
		height: 350rpx;
		background-color: #007AFF;
		margin: 20px auto;
	}
</style>
