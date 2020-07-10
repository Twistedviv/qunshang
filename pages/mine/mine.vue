<template>
	<view>
		<view class="header">
			<view class="header-back" @click="back"></view>
			<view class="header-setting" @click="setting"></view>
			<uni-drawer mode="right" ref="drawer">
				<view style="padding:30rpx;">
					<view class="drawer-item" id="drawer-item1">设 置</view>
					<view class="drawer-item" id="drawer-item2">我的二维码</view>
					<view class="drawer-item" id="drawer-item3">我的订单</view>
					<view class="drawer-item" id="drawer-item4">我的流量池</view>
					<view class="drawer-item" id="drawer-item5">消息设置</view>
					<view class="drawer-item" id="drawer-item6">商家服务中心</view>
					<view class="drawer-item" id="drawer-item7" @click="exit">退出账号</view>
				</view>
			</uni-drawer>
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
								编辑资料
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
		<!-- 	<view class="content-bottom">
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
			</view> -->
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		data() {
			return {
				
				
			}
		},
		components:{
			uniDrawer
		},
		methods: {
			back(){
				uni.navigateBack({});
			},
			setting(){
				this.$refs['drawer'].open();
			},
			//退出
			exit(){
				let _this = this;
				uni.showModal({
					title:"退出",
					conten:"是否确认退出",
					success:function(res){
						console.log(res);
						if(res.confirm==true){
							console.log("用户点击确认退出");
							try{
								uni.removeStorage({
									key:"userData",
									success:function(){
										_this.$store.commit("setUserData",{});
										console.log("成功移除userInfo");
										uni.reLaunch({
											url:"../login/login",
											success:function(res){
												console.log("重定向至登录页面");
											},
											fail:function(e){
												console.log("重定向失败："+e);
											}
										})
									},
									fail:function(e){
										console.log("移除失败:"+JSON.stringify(e));
									}
								})
							}catch(e){
								console.log("removing catch:"+e);
							}
						}else if (res.cancel==true){
							console.log("用户点击取消退出");
							return;
						}
					},
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: rgb(240,240,240);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	.header{
		width: 750rpx;
		height: 135px;
		background-color: rgb(172,232,254);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.header-back{
		margin-top: 50px;
		margin-left: 35rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50% 50%;
		background: url(../../static/img/common/arrow-left2.png) no-repeat rgb(78,205,252);
		background-position: 30% 50%;
	}
	.header-setting{
		margin-top: 50px;
		margin-right: 35rpx;
		width: 50rpx;
		height: 50rpx;
		border-radius: 50% 50%;
		background: url(../../static/img/common/points.png) no-repeat rgb(78,205,252);
		background-position: 50% 50%;
	}
	.drawer-item{
		width: 100%;
		height: 50px;
		font-size: 16px;
		line-height: 48px;
		text-indent: 3rem;
		border-radius: 5px;
		color: #000000;
		background-repeat: no-repeat;
		background-size: 11%;
		background-position: 17% 50%;
		margin-bottom: 5px;
	}
	#drawer-item1{
		font-size: 22px;
		font-weight: bold;
		text-indent: 0;
		text-align: center;
		color: #444444;
	}
	#drawer-item2{
		background-image: url(../../static/img/mine/qrcode.png);
	}
	#drawer-item3{
		background-image: url(../../static/img/mine/order.png);
	}
	#drawer-item4{
		background-image: url(../../static/img/mine/data.png);
	}
	#drawer-item5{
		background-image: url(../../static/img/mine/notice.png);
	}
	#drawer-item6{
		background-image: url(../../static/img/mine/zhuye.png);
	}
	#drawer-item7{
		background-image: url(../../static/img/mine/exit.png);
	}
	/* -----------------------------content----------------------------*/
	
	.content{
		width: 750rpx;
		
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
		background: url(http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20190115/87868f21befc4e7f9007aa71efa79621.jpeg) no-repeat;
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
		color: rgb(255, 0, 0);
	}
	
	/* ---user-right--- */
	.content-top-user-right-top{
		display: flex;
		flex-direction: row;
		padding-top: 35rpx;
	}
	.content-top-user-right-top-follow{
		width: 250rpx;
		height: 56rpx;
		font-size: 16px;
		line-height: 56rpx;
		text-align: center;
		color: rgb(0, 0, 0);
		background-color: rgb(255, 255, 255);
	}
	.content-top-user-right-top-select{
		width: 56rpx;
		height: 56rpx;
		background: url(../../static/img/common/play.png) no-repeat;
		background-size: 50% 50%;
		background-color: rgb(255, 255, 255);
		background-position: 50% 50%;
		margin-left: 24rpx;
		transform: rotate(90deg);
	}
	.content-top-user-right-bottom{
		color: rgb(0, 0, 0);
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
