<template>
	<view>
		<picker mode="selector" :range="pickArray" :value="value" @change="$emit('input',$event.detail.value)">
			<view class="main-list oBorder">
				<input class="main-input" disabled="true" placeholder="请选择身份" v-model="pickArray[value]"></input>
			</view>
		</picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		props:{
			pickArray:Array,
			value:Number,
		},
		methods:{

		}
	}
</script>

<style>
	@import url("./css/icon.css");
	
	.main-list{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 36upx;   /* Input 高度 */
		color: #333333;
		padding: 32upx;
		margin-top:24upx;
		margin-bottom: 24upx;
	}

	.main-input{
		flex: 1;
		text-align: left;
		font-size: 28upx;
		/* line-height: 100upx; */
		padding-right: 10upx;
		margin-left: 20upx;
	}
	.oBorder{
		border: none;
		border-radius: 2.5rem ;
		-webkit-box-shadow: 0 0 60upx 0 rgba(43,86,112,.1) ;
		box-shadow: 0 0 60upx 0 rgba(43,86,112,.1) ;
	}
</style>
