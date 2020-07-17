<template>
	<view>
		<swiper :indicator-dots="true" indicator-color="white" :style="{height:windowsHeight+'px'}">
			<swiper-item>
				<view class="swiper-item item1" :style="{height:windowsHeight+'px'}">
					<view class="title1">保存二维码发送给朋友扫码即可邀请</view>
					<view class="qrimg" @click="saveQrcode">
						<tki-qrcode ref="qrcode" :val="inviteUrl" :size="340"></tki-qrcode>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item item2" :style="{height:windowsHeight+'px'}">
					<view class="title2">点击链接复制发送给朋友打开即可邀请</view>
					<input type="text" name="" disabled="true" :value="inviteUrl" @click="copyUrl">
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import  tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		data() {
			return {
				windowsHeight:100,
			}
		},
		computed:{
			//扫码注册URL：注册链接+邀请码
			inviteUrl:function(){
				//此处为web注册页面
				let url = "http://212.129.235.182:88/regist.html";
				//此处为用户邀请码
				let invitecode = this.$store.state.userInfo.invitecode;
				return url+"?invitecode="+invitecode;
			}
		},
		components:{
			tkiQrcode
		},
		created:function() {
			this.$store.commit('getWindowsHeight');
			this.windowsHeight = this.$store.state.windowsHeight;
			console.log("当前页面高度："+this.$store.state.windowsHeight);

		},
		mounted() {
			this.$refs.qrcode._makeCode();
		},
		methods: {
			
			//保存二维码
			saveQrcode(){
				this.$refs.qrcode._saveCode();
			},
			//复制邀请链接
			copyUrl(){
				uni.setClipboardData({
					data:this.url,
					success:function(){
						uni.showToast({
							title:"链接已复制 "
						})
					}
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
	.qrimg{
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
