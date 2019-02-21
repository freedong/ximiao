<template>
  <div class="app">

    <div class="loading-bar" :class="nowStatus">
      <span class="press"></span>
    </div>

    <div class="app-init">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>

    <footer class="footer clear" :class="{'leave':leaveComp}">
      <div class="footer-item" :class="{'active':isActive('home')}" @click="open('/home')">
        <p class="icon">
          <span class="iconfont icon-shouye"></span>
        </p>
        <p class="name">首页</p>
      </div>
      <div class="footer-item" :class="{'active':isActive('classification')}" @click="open('/classification')">
        <p class="icon">
          <span class="iconfont icon-fenlei"></span>
        </p>
        <p class="name">分类</p>
      </div>
      <div class="footer-item shop-car" :class="{'active':isActive('shoppingcart')}" @click="open('/shoppingcart')">
        <p class="icon">
          <span class="iconfont icon-gouwuche"></span>
        </p>
        <p class="name">购物车</p>
        <!-- <span class="num"></span> -->
      </div>
      <div class="footer-item" :class="{'active':isActive('mine')}" @click="open('/mine')">
        <p class="icon">
          <span class="iconfont icon-smile"></span>
        </p>
        <p class="name">我的</p>
      </div>
    </footer>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name:'app',
    data(){
      return {
        transitionName:'slide-go',
      }
    },
    watch:{},
    computed:{
      ...mapGetters([
        'nowStatus',
      ]),
      leaveComp(){
        var resout = true;
        var base = ['home','classification','shoppingcart','mine'];
        for (var i = 0; i < base.length; i++) {
          if(this.isActive(base[i])){
            resout = false;
          }
        }
      }
    },
    methods:{},
  }
</script>

<style lang="sass" type="text/sass">
@import "./assets/sass/public"
@import "./assets/font/iconfont.css"
</style>
