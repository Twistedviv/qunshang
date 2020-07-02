<template>
	<view>
		<view class="top">
			<view class="top-item" id="top-item1">添加好友</view>
			
			<view class="top-item" id="top-item2">新增粉丝</view>
			
			<view class="top-item" id="top-item3">与我相关</view>
		</view>
		<view class="content">
			<view class="list"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	page{
		background-color: #f0f0f0;
	}
	.top{
		width: 750rpx;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		border-radius: 10px;
		padding-top: 10px;
	}
	.top-item{
		width: 210rpx;
		box-sizing: border-box;
		text-align: center;
		line-height: 160px;
		font-size: 14px;
		border-radius: 10px;
		background: no-repeat #ffffff;
		background-size: 50%;
		background-position: 50% 25%;
	}
	#top-item1{
		background-image: url(../../static/img/message/add.png);
	}
	#top-item2{
		background-image: url(../../static/img/message/love.png);
	}
	#top-item3{
		background-image: url(../../static/img/message/notice.png);
	}
	
	
	.content{
		width: 750rpx;
		height: 450px;
		padding-top: 10px;
	}
	.list{
		width: 700rpx;
		height: 100%;
		margin: 0 auto;
		background-color: #FFFFFF;
		border-radius: 10px;
	}
</style>
