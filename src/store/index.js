import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

//路由状态
const AppLoading = {
  state:{
    nowStatus:'loading'
  },
  getters:{
    nowStatus:state => {
      return state.nowStatus
    }
  },
  mutations:{
    nowStatus(state,data){
      state.nowStatus = data
    }
  },
}



export default new Vuex.Store({
  modules:{
    AppLoading
  }
})
