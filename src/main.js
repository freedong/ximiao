import Vue from 'vue'
import App from './App.vue'
import store from './store/index' //状态
import router from './router'//路由


Vue.config.productionTip = false


// 路由之前变化
router.beforeEach((to,from,next)=>{
  store.commit('nowStatus','loading')
  next();
})

//路由之后变化
router.afterEach((to,from,next)=>{

  store.commit('nowStatus','end')

  setTimeout(()=>{
    store.commit('nowStatus','hide')
  },900)

  setTimeout(()=>{
    store.commit('nowStatus','normal')
  },1000)

})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
