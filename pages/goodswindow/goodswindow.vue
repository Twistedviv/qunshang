<template>
	<view>
		<view class="header">
			<view class="header-top">
				<view class="back"></view>
				<view class="setting"></view>
			</view>
			<view class="header-bottom">
				<view class="header-bottom-left"></view>
				<view class="header-bottom-title">橱窗</view>
				<view class="header-bottom-right"></view>
			</view>
		</view>
		<view class="content">
			<view class="search">
				<searchBar radius="30" cancelButton="none" clearButton="auto" bgColor="#ffffff"></searchBar>
			</view>
			<view class="goodslist">
				<view class="goodsitem" v-for="item in list">
					<image :src="item.src" mode="fill"></image>
					<view class="item-name">{{item.name}}</view>
					<view class="item-bottom">
						<view class="item-price">￥{{item.price}}</view>
						<view class="item-cart" @click="addTo4Cart"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script> 
	import searchBar from "../../components/uni-search-bar/uni-search-bar.vue"
	export default {
		data() {
			return {
				list:[
					{
						src:"//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/134277/18/3466/532255/5efd339bE7441eeca/a50b2f5ba6ac7412.jpg!q70.dpg.webp",
						name:"                                                                                                       华为平板MatePad Pro 10.8英寸麒麟990影音娱乐办公游戏学习全面屏平板电脑8GB+256GB WIFI（贝母白）                             ",
						price:3999
					},
					{
						src:"//img20.360buyimg.com/mobilecms/s372x372_jfs/t1/49862/33/9683/132514/5d6e7827E2c046832/de91851ca2efbe5b.jpg!q70.dpg.webp",
						name:"                                                                                                       小米智能摄像机云台版白色1080P家用监控高清360度红外夜视增强移动监测摄像头                             ",
						price:189
					},
					{
						src:"//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/118411/32/10396/73008/5eec0fbdE1e54863f/5b4122c3d2949502.jpg!q70.dpg.webp",
						name:"                                                                                                       荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快充 全网通6GB+128GB 冰岛幻境                             ",
						price:1389
					},
					{
						src:"//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/147609/18/1223/357990/5ef0514dE9e03e635/29aed8e129d8a11b.jpg!q70.dpg.webp",
						name:"                                                                                                       联想(Lenovo)拯救者R7000 15.6英寸游戏笔记本电脑(R5-4600H 16G 512G SSD GTX1650 100%sRGB)幻影黑                             ",
						price:5699
					},
					{
						src:"//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/134277/18/3466/532255/5efd339bE7441eeca/a50b2f5ba6ac7412.jpg!q70.dpg.webp",
						name:"                                                                                                       华为平板MatePad Pro 10.8英寸麒麟990影音娱乐办公游戏学习全面屏平板电脑8GB+256GB WIFI（贝母白）                             ",
						price:3999
					},
					{
						src:"//img20.360buyimg.com/mobilecms/s372x372_jfs/t1/49862/33/9683/132514/5d6e7827E2c046832/de91851ca2efbe5b.jpg!q70.dpg.webp",
						name:"                                                                                                       小米智能摄像机云台版白色1080P家用监控高清360度红外夜视增强移动监测摄像头                             ",
						price:189
					},
					{
						src:"//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/118411/32/10396/73008/5eec0fbdE1e54863f/5b4122c3d2949502.jpg!q70.dpg.webp",
						name:"                                                                                                       荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快充 全网通6GB+128GB 冰岛幻境                             ",
						price:1389
					},
					{
						src:"//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/147609/18/1223/357990/5ef0514dE9e03e635/29aed8e129d8a11b.jpg!q70.dpg.webp",
						name:"                                                                                                       联想(Lenovo)拯救者R7000 15.6英寸游戏笔记本电脑(R5-4600H 16G 512G SSD GTX1650 100%sRGB)幻影黑                             ",
						price:5699
					}
				]
			}
		},
		components:{
			searchBar
		},
		methods: {
			
		}
	}
</script>

<style>
	.header{
		width: 750rpx;
		height: 80px;
		background-color: rgb(172,232,254);
	}
	.header-top{
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.back{
		width: 50rpx;
		height: 50rpx;
		background: rgb(78,205,252) url(../../static/img/common/arrow-left2.png) no-repeat;
		background-position: 30% 50%;
		border-radius: 50%;
		margin-top: 30px;
		margin-left: 35rpx;
	}
	.setting{
		width: 50rpx;
		height: 50rpx;
		background: rgb(78,205,252) url(../../static/img/common/points.png) no-repeat;
		background-position: 50% 50%;
		border-radius: 50%;
		margin-top: 30px;
		margin-right: 35rpx;
	}
	.header-bottom{
		height: 30px;
		margin-top: 5px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		
	}
	.header-bottom-left{
		width: 300rpx;
		height: 2px;
		margin-top: 13px;
		background: rgb(172,232,254) url(../../static/img/xiantiao.png);
	}
	.header-bottom-title{
		font-size: 14px;
		text-align: center;
	}
	.header-bottom-right{
		width: 300rpx;
		height: 2px;
		margin-top: 13px;
		background: rgb(172,232,254) url(../../static/img/xiantiao.png);
	}
	.content{
		width: 750rpx;
		padding-top: 5px;
		background-color: #FFFFFF;
	}
	.goodslist{
		width: 750rpx;
		height: 400px;
		padding: 10px 30rpx 0 30rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.goodsitem{
		width: 320rpx;
		height: 250px;
		margin: 3px;
		border-radius: 6px;
		border: 1px solid rgb(240,240,240);
		box-shadow: 0rpx 0rpx 7rpx rgba(4,0,0,.2);
	}
	.goodsitem image{
		width: 320rpx;
		height: 320rpx;
		margin: 0 auto;
		border-radius: 6px 6px 0 0;
		
	}
	.item-name{
		font-size: 14px;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		margin-top: 5px;
		margin-bottom: 13px;
		padding: 0 15rpx;
	}
	.item-bottom{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 20rpx;
	}
	.item-price{
		font-size: 16px;
		color: rgb(224,50,42);
	}
	.item-cart{
		width: 50rpx;
		height: 50rpx;
		background: url(../../static/img/cart.png) no-repeat;
		background-size: 90%;
		background-position: 0 70%;
	}
</style>
