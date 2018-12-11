<template>
    <div class="films-list">
        <!-- 轮播图 -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../images/pic-1.jpg" alt="">
        </div>
        <div class="swiper-slide">
             <img src="../images/pic-2.jpg" alt="">
        </div>
        <div class="swiper-slide">
             <img src="../images/pic-3.jpg" alt="">
        </div>
          <div class="swiper-slide">
             <img src="../images/pic-4.jpg" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
   </div>
   <!-- 轮播图 -->
   <!-- 定位城市 -->
   <div class="city-fixed">
      <span>{{ curCity }}</span>
      <i class="iconfont icon-xiala"></i>
    </div>
   <!-- 定位城市 -->
   <div style="height:2000px;"></div>
  </div>
</template>

<script>
//引入swiper
import Swiper from 'swiper'
export default {
  name: 'Films',
  data () {
      return {
          //当前城市
         curCity:''
      }
  },
  created () {
  //获取当前城市的名字
  /* eslint-disable*/
  let myCity =new BMap.LocalCity();
  myCity.get((result) => {
   this.curCity=result.name;
  });
  },
  mounted () {
      new Swiper('.swiper-container',{
          //无缝轮播
           loop: true,
          //自动轮播
           autoplay: {
           delay: 2000,
           stopOnLastSlide: false,
           disableOnInteraction: true,
        },
         // 如果需要分页器
           pagination: {
           el: '.swiper-pagination',
        },
         // 如果需要前进后退按钮
           navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
        },
      })
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
.swiper-container{
    height:px2rem(210);
    .swiper-pagination-bullet{
        width: px2rem(10);
        height:px2rem(10);
    }
    .swiper-pagination-bullet-active{
        background: pink;
    }
}
.city-fixed {
  position: absolute;
  top: px2rem(18);
  left: px2rem(8);
  z-index: 999;
  height: px2rem(30);
  line-height: px2rem(30);
  font-size: px2rem(14);
  color: #fff;
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
  background: rgba(0, 0, 0, 0.2);
}
</style>
