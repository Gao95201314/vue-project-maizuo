<template>
  <div class="cinemas-list">
    <div class="header">
      <span class="ding">深圳<i class="iconfont icon-35_xiangxiajiantou"></i></span>
      <span class="itheme">影院</span>
      <i></i>
    </div>
    <div class="search">
    <mt-search v-model="searchText"></mt-search>
    </div>
    <div class="list" ref="wrapper">
      <div>
      <div class="contact" v-for="(item,index) in filterList" :key="index">
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
     arr:[],
     searchText:''
   }
  },
   computed:{
    filterList() {
      var arr1=this.arr.filter(item => {
        return item.name.indexOf(this.searchText)>-1;
      })
      return arr1;
    }
  },
  methods:{
    fn1 (event) {
      var searchText=event.target.value;
      this.searchText=searchText;
    }
  },
  created () {
    axios.get('/static/api/cinemas.json').then((response) => {
          let result = response.data;
          this.arr=result;
          // console.log(result);
        });
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="scss"  scoped>
@import "@/styles/common/px2rem.scss";
.cinemas-list {
  flex: 1;
  .header {
    line-height: px2rem(50);
    height: px2rem(50);
    span {
      font-size: px2rem(20);
    }
    .ding{
      font-size: px2rem(16);
      margin-left:px2rem(10);
    }
    .itheme{
      margin-left:px2rem(100);
    }
  }
  .search{
  height: px2rem(72);
  padding: px2rem(10);
  background:white;
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
