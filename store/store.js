import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		userInfo:{},
		windowsHeight:100,
		iStatusBarHeight:0
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		getWindowsHeight(state){
			state.windowsHeight = uni.getSystemInfoSync().windowHeight;
		},
		getStatusBarHeight(state){
			state.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		},
		setUserInfo(state,value){
			state.userInfo = value;
		}
		
	},
	actions:{
		setUserInfo(context,value){
			context.commit('setUseInfo',value)
		}
	}
})

export default store