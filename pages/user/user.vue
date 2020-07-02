<template>
	<view>
		<view class="header">
			<view class="header-back" @click="back"></view>
			<view class="header-setting" @click="setting"></view>
		</view>
		<view class="content">
			<view class="content-top">
				<view class="content-top-user">
					<view class="content-top-user-left">
						<view class="content-top-user-left-head">
							<view></view>
						</view>
						<view class="content-top-user-left-name">
							小黑
						</view>
						<view class="content-top-user-left-identity">
							身份：会员
						</view>
					</view>
					<view class="content-top-user-right">
						<view class="content-top-user-right-top">
							<view class="content-top-user-right-top-follow">
								关注
							</view>
							<view class="content-top-user-right-top-select"></view>
						</view>
						<view class="content-top-user-right-bottom">
							个性签名
						</view>
					</view>
				</view>
				<view class="content-top-list">
					<view class="content-top-list-item">所属社群</view>
					<view class="content-top-list-item">商品橱窗</view>
				</view>
			</view>
			<view class="content-bottom">
				<view class="content-bottom-content">
					<view class="content-bottom-content-item">
						
					</view>
					<view class="content-bottom-content-item">
						
					</view>
					<view class="content-bottom-content-item">
						
					</view>
					<view class="content-bottom-content-item">
						
					</view>
					
				</view>
			</view>
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
			back:function(){
				uni.navigateBack({});
			},
			setting:function(){
				//右上设置
			}
		}
	}
</script>

<style>
	page{
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.header{
		width: 750rpx;
		height: 135px;
		background-color: rgb(251,222,198);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.header-back{
		margin-top: 30px;
		margin-left: 35rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50% 50%;
		background: url(../../static/img/arrow-left2.png) no-repeat rgb(251,212,181);
		background-position: 30% 50%;
	}
	.header-setting{
		margin-top: 30px;
		margin-right: 35rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50% 50%;
		background: url(../../static/img/points.png) no-repeat rgb(251,212,181);
		background-position: 50% 50%;
	}
	
	/* -----------------------------content----------------------------*/
	
	.content{
		width: 750rpx;
		background-color: rgb(254,254,254);
		display: flex;
		flex-direction: column;
	}
	
	/* -----------content-top------------*/
	
	.content-top{
		height: 220px;
	}
	
	/* ----content-top-user----*/
	
	.content-top-user{
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
	}
	/* ---user-left--- */
	.content-top-user-left{
		width: 150rpx;
		display: flex;
		flex-direction: column;
		padding: 0 35rpx 0 35rpx;
	}
	.content-top-user-left-head{
		width: 140rpx;
		height: 140rpx;
		margin-top: 10px;
	}
	.content-top-user-left-head view{
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background: url(../../static/logo.png) no-repeat;
		background-size: 100%;
	}
	.content-top-user-left-name{
		width: 140rpx;
		font-size: 20px;
		text-align: center;
		padding-top: 3px;
	}
	.content-top-user-left-identity{
		width: 140rpx;
		font-size: 13px;
		padding-top: 13rpx;
		text-align: center;
		color: rgb(236,105,53);
	}
	
	/* ---user-right--- */
	.content-top-user-right-top{
		display: flex;
		flex-direction: row;
		padding-top: 35rpx;
	}
	.content-top-user-right-top-follow{
		width: 205rpx;
		height: 56rpx;
		text-align: center;
		color: rgb(236,105,53);
		background-color: rgb(252,222,198);
	}
	.content-top-user-right-top-select{
		width: 56rpx;
		height: 56rpx;
		background: url(../../static/img/play.png) no-repeat;
		background-size: 50% 50%;
		background-color: rgb(252,222,198);
		background-position: 50% 50%;
		margin-left: 24rpx;
		transform: rotate(90deg);
	}
	.content-top-user-right-bottom{
		color: rgb(236,105,53);
		font-size: 22rpx;
		margin-top: 7px;
	}
	/* ----content-top-list----*/
	
	.content-top-list{
		width: 750rpx;
		height: 61px;
		/* border: 1px solid #007AFF; */
	}
	.content-top-list-item{
		height: 30px;
		line-height: 30px;
		font-size: 14px;
		text-indent: 3em;
		border-bottom: 1px dotted #808080;
		background: url(../../static/img/cart.png) no-repeat;
		background-size: 6%;
		background-position: 3% 60%;
		
	}
	
	/* ----------content-bottom-----------*/
	
	.content-bottom{
		
	}
	.content-bottom-content{
		width: 660rpx;
		margin: 0 auto;
		background-color:  rgb(251,222,198);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 10px;
		/* border: 1px solid #000000; */
	}
	.content-bottom-content-item{
		width: 278rpx;
		height: 347rpx;
		background-color: rgb(236,105,53);
		margin-bottom: 14rpx;
		margin-left: 8px;
	}
</style>
