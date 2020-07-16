<template>
	<view>
		<view class="code">
			<view id="qrcode"></view>
		</view>
	</view>
</template>

<script>
	import QRCode from "qrcodejs2"
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			init(){
				var _this = this;
				this.qrcode = new QRCode('qrcode',{
					width:130,
					height:130,
					text:"http://www.baidu.com",
					colorDark:'#000',
					colorLight:'#fff'
				})
			}
		}
	}
</script>

<style>
	view{
		background: url(http://hbimg.huabanimg.com/6d28cfdb0f69acaa5c21651ebfb924a5b796dee646f30-JP2KuL_fw658/format/webp) no-repeat;
		background-size: 100%;
	}
</style>
