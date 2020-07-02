<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true"  :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item" id="item1"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" id="item2"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" id="item3"></view>
			</swiper-item>
		</swiper>
		<view class="grid">
			<view class="grid-left">抽奖夺宝</view>
			<view class="grid-right">
				<view class="grid-right-item" id="right-item-1" >
					<view class="item-left">
						每日签到
					</view>
					<view class="item-right">
						> 
					</view>
				</view>
				<view class="grid-right-item" id="right-item-2">
					<view class="item-left">
						社群日常
					</view>
					<view class="item-right">
						> 
					</view></view>
				<view class="grid-right-item" id="right-item-3">
					<view class="item-left">
						邀请好友
					</view>
					<view class="item-right">
						> 
					</view></view>
			</view>
		</view>
		<view class="notice">
			<view class="title">
				<view class="title-left">公告栏</view>
				<view class="title-right">...</view>
			</view>
			<view class="content"></view>
		</view>
	</view>

</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				user:JSON.stringify(this.$store.state.userInfo)
			}
		},
		computed:{
			
		},
		onLoad() {
			console.log(this.user)
		},
		methods: {
			

		}
	}
</script>

<style>
	page{
		background-color: rgb(240,240,240);
	}
	swiper{
		height: 220px;
		width: 750rpx;
	}
	.swiper-item{
		height: 100%;
	}
	#item1{
		background: url(../../static/img/index/banner1.jpg) no-repeat ;
		background-size: contain;
	}
	#item2{
		background: url(../../static/img/index/banner2.jpg) no-repeat ;
		background-size: contain;
	}
	#item3{
		background: url(../../static/img/index/banner1.jpg) no-repeat ;
		background-size: contain;
	}
	.grid{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 10px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.grid-left{
		width: 280rpx;
		height: 150px;
		line-height: 40px;
		box-sizing: border-box;
		border-radius: 10px;
		font-size: 18px;
		text-align: center;
		background: url(../../static/img/index/gift.png) no-repeat #ffffff;
		background-size: 70%;
		background-position: 50% 80%;
	}
	.grid-right{
		width: 400rpx;
		height: 150px;
		display: flex;
		font-size: 16px;
		flex-direction: column;
		justify-content: space-between;
	}
	.grid-right-item{
		height: 40px;
		box-sizing: border-box;
		line-height: 40px;
		text-indent: 1em;
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-right: 10px;
		
	}
	#right-item-1{
		background: url(../../static/img/index/sign.png) no-repeat #ffffff;
		background-size: 20%;
		background-position: 55% 50%;
	}
	#right-item-2{
		background: url(../../static/img/index/group.png) no-repeat #ffffff;
		background-size: 20%;
		background-position: 55% 50%;
	}
	#right-item-3{
		background: url(../../static/img/index/share.png) no-repeat #ffffff;
		background-size: 20%;
		background-position: 55% 50%;
	}
	.notice{
		width: 715rpx;
		height: 250px;
		border-radius: 10px;
		margin: 20px auto;
		background-color: #FFFFFF;
	}
	.title{
		font-size: 17px;
		border-bottom: 1px grey double;
		padding: 0 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
</style>
