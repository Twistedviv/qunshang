<script>
	import Vue from 'vue'
	import store from "store/store.js"
	
	export default {
		created() {
			// #ifdef APP-PLUS
			plus.navigator.closeSplashscreen(); 
			// #endif 
		},
		onLaunch: function() {
			
			console.log('App Launch')
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
				}
			})
			

			
		},
		onShow: function() {
			
			console.log('App 开启')
			//app onShow时，检查是否已登录，否则跳转登录
			try {
				uni.getStorage({key:'userData',
					success:function(res){
						console.log("自动登陆成功："+JSON.stringify(res.data))
						store.dispatch("setUserData",res.data); //存入Vuex状态
					},
					fail:function(){
						console.log("获取用户数据失败")
						uni.reLaunch({
							url: 'pages/login/login',
						});
					}
				})} catch (e) {
					console.log("检查缓存出错："+e)
				}
			
		},
		onHide: function() {
			console.log('App 关闭')
		}
	}
</script>

<style >


</style>
