<template>
	<view>
		<swiper :indicator-dots="true" :indicator-color="white" :style="{height:windowsHeight+'px'}">
			<swiper-item>
				<view class="swiper-item item1" :style="{height:windowsHeight+'px'}">
					<view class="title1">保存二维码发送给朋友扫码即可邀请</view>
					<view id="qrcode"></view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item item2" :style="{height:windowsHeight+'px'}">
					<view class="title2">点击链接复制发送给朋友打开即可邀请</view>
					<input type="text" name="" id="" disabled="true" :value="url">
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import QRCode from "qrcodejs2"
	export default {
		data() {
			return {
				windowsHeight:100,
				qrcodeSrc:"",
				url:""
			}
		},
		
		created:function() {
			this.$store.commit('getWindowsHeight');
			this.windowsHeight = this.$store.state.windowsHeight;
			console.log("当前页面高度："+this.$store.state.windowsHeight);
			uni.getImageInfo({
				src:"",
				success:function(res){
					this.qrcodeSrc = res.path;
					console.log("获取邀请二维码成功！本地路径为："+this.qrcodeSrc);
				}
			});
			
			//将请求到的url字符串
			// this.url = 
		},
		mounted() {
			this.init();
		},
		methods: {
			
			//保存二维码
			saveQrcode(){
				uni.saveImageToPhotosAlbum({
					filePath:this.qrcodeSrc,
					success:function(){
						uni.showToast({
							title:"图片已保存至相册"
						})
					}
				})
			},
			copyUrl(){
				uni.setClipboardData({
					data:this.url,
					success:function(){
						uni.showToast({
							title:"链接已复制到剪贴板"
						})
					}
				})
			},
			init(){
				var _this = this;
				this.qrcode = new QRCode('qrcode',{
					width:180,
					height:180,
					text:"http://www.baidu.com?yaoqinma=123164654",
					colorDark:'#000',
					colorLight:'#fff'
				})
			}
		}
	}
</script>

<style>
	.item1{
		width: 750rpx;
		background: url(../../../static/img/index/inviting/qrcode.jpg) no-repeat;
		background-size: contain;
	}
	.item2{
		width: 750rpx;
		background: url(../../../static/img/index/inviting/url.jpg) no-repeat;
		background-size: contain;
	}
	.title1{
		width: 750rpx;
		font-size: 26rpx;
		text-align: center;
		margin: 0 auto;
		position: absolute;
		top:22%;
	
	}
	#qrcode{
		width: 350rpx;
		height: 350rpx;
		position: absolute;
		top:30%;
		margin: 0 200rpx;
	}
	.item2 input{
		width: 350rpx;
		background-color: #FFFFFF;
		border: 1px solid rgb(240,240,240);
		box-shadow: 0rpx 0rpx 7rpx rgba(4,0,0,.2);
		padding: 5px 0 5px 10px; border-radius: 25px;
		position: absolute;
		top:230px;
		margin: 0 200rpx;
	}
	.title2{
		width: 750rpx;
		font-size: 26rpx;
		text-align: center;
		position: absolute;
		top:195px;

	}
</style>
