import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))  //session保存的是字符串类型，需要转换一下
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUser:state=>{
      return state.userInfo
    }
  }
})
