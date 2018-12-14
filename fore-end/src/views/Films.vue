<template>
    <div class="films-list">
      <Banner></Banner>
       <!-- tab-bar -->
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <li :class="{'z-act':$route.path==='/films/nowPlaying'}" @click="switchList('now')">
          <span>正在热映</span>
        </li>
        <li :class="{'z-act':$route.path==='/films/comingSoon'}" @click="switchList('soon')">
          <span>即将上映</span>
        </li>
      </ul>
    </div>
    <!-- /tab-bar -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入swiper
import Banner from '../components/Banner/index';

export default {
  name: 'Films',
  components:{
    Banner
  },
  methods:{
    // 切换路由
  switchList (type) {
   if (type==='now') {
     this.$router.push({
       name:'nowPlaying'
     })
   } else {
     this.$router.push('/films/comingSoon');
   }
  }
  }
}
</script>

<style lang="scss">
@import '../styles/common/px2rem.scss';
@import 'swiper/dist/css/swiper.min.css';
.films-list {
  flex: 1;
  overflow-y: auto;
}
.tab-bar-wrapper {
  position: sticky;
  z-index: 999;
  top: px2rem(0);
  height: px2rem(50);
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  .tab-bar {
    display: flex;
    height: px2rem(50);
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}
</style>
