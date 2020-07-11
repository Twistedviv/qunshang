import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		userInfo:{
			userPhone:""
		},
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
		setUserData(state,value){
			state.userInfo.userPhone = value.phoneData;
		}
		
	},
	actions:{
		setUserData(context,value){
			context.commit('setUserData',value)
		}
	}
})

export default store