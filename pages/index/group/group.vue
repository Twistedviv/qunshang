<template>
	<view>
		社群页面
		<button @click="toLivePusher">录直播</button>
		<button @click="toLive">看直播</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLivePusher(){
				uni.navigateTo({
					url:"../../live/live-push"
				})
			},
			toLive(){
				uni.navigateTo({
					url:"../../live/live"
				})
			}
		}
	}
</script>

<style>

</style>
