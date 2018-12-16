<template>
    <div class="cinemas-list">
        <h1>我是影院</h1>
        <ul>
          <li v-for="(item,index) in myLoveBooks" :key="index">
            {{item.name}}
          </li>
        </ul>
    </div>
</template>

<script>
// import store from '../store';
import { mapGetters } from 'vuex';
export default {
  name: 'Cinemas',
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
  // methods: {
  //   change () {
  //     //操作store里面的mutations
  //     //得提交mutations
  //     this.$store.commit('changeCurCity',{
  //       'cityName':'中山',
  //       'quName':'宝安区'
  //     });
  //   }
  // }
  computed: {
    ...mapGetters([
      'myLoveBooks'
    ]),
  },
  mounted () {
     console.log(this.$store.getters.myLoveBooks);
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
