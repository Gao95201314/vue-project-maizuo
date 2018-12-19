<template>
  <div class="cinemas-list">
    <div class="header">
      <span class="ding">深圳<i class="iconfont icon-35_xiangxiajiantou"></i></span>
      <span>影院</span>
      <router-link class="iconfont icon-fangdajing" tag="i" to="/search"></router-link>
    </div>
    <div class="middle">
      <span>全城
        <i class="iconfont icon-35_xiangxiajiantou"></i>
      </span>
      <span>最近去过
        <i class="iconfont icon-35_xiangxiajiantou"></i>
      </span>
    </div>
    <div class="list" ref="wrapper">
      <div>
      <div class="contact" v-for="(item,index) in arr" :key="index">
        <div class="left">
          <p>{{item.name}}</p>
          <p>{{item.address}}</p>
        </div>
        <div class="right">
          <p>￥
            <span>{{item.lowPrice/100}}</span>起
          </p>
          <p>距离未知</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '../store';
import BScroll from 'better-scroll';
import axios from 'axios';
export default {
  name: 'Cinemas',
  data () {
   return {
     arr:[]
   }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  created () {
    axios.get('/static/api/cinemas.json').then((response) => {
          let result = response.data;
          this.arr=result;
          // console.log(result);
        });
  }
};
</script>

<style lang="scss"  scoped>
@import "@/styles/common/px2rem.scss";
.cinemas-list {
  flex: 1;
  .header {
    display: flex;
    justify-content: space-around;
    line-height: px2rem(50);
    height: px2rem(50);
    span {
      font-size: px2rem(20);
    }
    .icon-fangdajing{
      font-size:px2rem(20);
    }
    .ding{
      font-size: px2rem(16);
    }
  }
  .middle {
    display: flex;
    justify-content: space-around;
    height: px2rem(60);
    line-height: px2rem(60);
    border-bottom: 1px solid #ccc;
  }
  .list {
    overflow: hidden;
    position: absolute;
    top: px2rem(120);
    left: 0;
    right: 0;
    bottom: 0;
    .contact {
      display: flex;
      flex: 1;
      justify-content: space-between;
      font-size: px2rem(16);
      height: px2rem(50);
      margin-top: px2rem(10);
      .left p:nth-child(2) {
        color: #666;
        font-size: px2rem(14);
        margin-top: px2rem(5);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width:px2rem(270);
      }
      .right p:nth-child(1) {
        color: orange;
      }
      .right p:nth-child(2) {
        color: #666;
        margin-top: px2rem(5);
      }
    }
  }
}
</style>
