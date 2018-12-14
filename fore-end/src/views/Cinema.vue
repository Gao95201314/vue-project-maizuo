<template>
    <div class="cinemas-list">
        <h1>我是影院</h1>
        <!-- <h2>我当前的定位城市是:{{store.state.curCity}}</h2>
        <h2>我当前的定位城市是:{{this.$store.state.curCity}}</h2> -->
        <h2>我当前的定位城市是:{{this.$store.state.curCity}}</h2> 
        <!-- <h2>我的爱好是:{{myLove}}</h2>  -->
        <!-- <h2>{{projectName}}</h2>
        <h2></h2> -->
        <button @click="change">修改 store 里面的 curCity</button>
    </div>
</template>

<script>
import store from '../store';
import {mapState} from 'vuex';
export default {
  name: 'Cinemas',
  data () {
    return {
      store: store
    }
  },
  //计算属性的方式获取state里面的值
  // computed:{
  //   curCity () {
  //     return this.$store.state.curCity;
  //   },
  //   myLove () {
  //     return this.$store.state.myLove;
  //   }
  // }
  // computed:mapState([
  //   'curCity',
  //   'myLove'
  // ])
  // computed:mapState({
  //   'myCity': (state)=>{
  //     return state.curCity+'很好'
  //   },
  //   'myLove': (state)=>{
  //     return state.myLove+'很修身'
  //   }
  // })
  methods: {
    change () {
      //操作store里面的mutations
      //得提交mutations
      this.$store.commit('changeCurCity',{
        'cityName':'中山',
        'quName':'宝安区'
      });
    }
  }
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import '@/styles/common/px2rem.scss';
.cinemas-list {
  flex: 1;
  overflow-y: auto;
}
</style>
