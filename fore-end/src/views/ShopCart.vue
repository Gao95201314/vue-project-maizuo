<template>
  <div class="shopCart">
    <div class="header">
      <router-link class="iconfont icon-xiayibu" tag="i" to="/"></router-link>
      <span>购物车</span>
    </div>
    <!-- 购物车列表 -->
    <div class="wrap" ref="wrapper">
      <div>
    <div class="cartitems" v-for="(item,index) in filmsCard" :key="index">
      <div class="left">
        <span>{{item.filmName}}影片</span>
        <p class="price">￥<span>{{item.filmPrice}}</span></p>
      </div>
      <div class="right">
        <button class="del iconfont icon-huishouzhan" @click="delSingle(item)"></button>
        <div class="btn">
          <button @click.stop="reduceFilm(item)" class="btn1">-</button>
        <span class="inp">{{findNum(item)}}</span>
        <button @click.stop="addFilm(item)" class="btn2">+</button>
        </div>
      </div>
    </div>
    <!-- 合计结算 -->
    <div class="allprice">
      <span class="all">合计<span class="money"><span>￥</span>{{getTotalPrice}}</span></span>
      <span class="mall">去结算</span>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import BScroll from 'better-scroll';
export default {
  name:'Shopcart',
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'filmsCard'
    ]),
    ...mapGetters([
      'getTotalPrice',
    ])
  },
  methods:{
    ...mapMutations([
      'addFilm',
      'reduceFilm'
    ]),
    /**
     * 查找当前这个电影，在购物车中的数量
     * @param {Object} item 当前电影
     */
    findNum (item) {
      let filmId=item.filmId;
      //判断当前这个filmId在store中的filmsCard中存在不？
      let num=0;
      this.filmsCard.forEach(item => {
        if (item.filmId===filmId) {
          num=item.filmNum;
        }
      });
      return num;
    },
    //删除单个电影
    delSingle (item) {
        let filmId = item.filmId;
        let index = -1;
        this.filmsCard.forEach((item, i) => {
            if (item.filmId === filmId) {
                index = i;
            }
        });
        if (index > -1) {
            this.filmsCard.splice(index, 1);
        }
        localStorage.setItem('filmsCard', JSON.stringify(this.filmsCard));
        // this.getShopCartInfo ();
    },
    /* //计算单个电影的总价
    getSinglePrice (item) {
      let filmId=item.filmId;
      let price=0;
      this.filmsCard.forEach(item => {
        if (item.filmId===filmId) {
          price=item.filmNum*item.filmPrice;
        }
      });
      return price;
    }, */
  },
   mounted () {
    this.scroll = new BScroll(this.$refs.wrapper);
  },

}
</script>
<style lang="scss">
@import '@/styles/common/px2rem.scss';
.shopCart{
  flex:1;
  .header{
    height:px2rem(50);
    width:100%;
    background:#0078e3;
    line-height:px2rem(50);
    font-size:px2rem(20);
    color:white;
    i{
      margin-left:px2rem(10);
    }
    span{
      margin-left:px2rem(130);
    }
  }
 .wrap{
   overflow: hidden;
    position: absolute;
    top: px2rem(50);
    left: 0;
    right: 0;
    bottom: 0;
    .cartitems{
    height:px2rem(80);
    width:100%;
    border-bottom: 1px solid #ccc;
    display:flex;
    justify-content: space-between;
    .left{
      padding-left:px2rem(5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .btn{
        margin-top:px2rem(3);
        button{
          border: none;
          background: orange;
          flex-shrink: 0;
        }
        .inp{
          text-align: center;
          width:px2rem(30);
          border: none;
          height:px2rem(20);
        }
      }
      .price{
        margin-right:px2rem(5);
        margin-top:px2rem(5);
        color:orangered;
      }
    }
    .right{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      .del{
        border:px2rem(0);
        background-color:transparent;
        outline: none;
      }
      .icon-huishouzhan{
      font-size: px2rem(30);
      color:green;
      }
      .btn{
        margin-top:px2rem(3);
        button{
          border: none;
          background: orange;
          flex-shrink: 0;
        }
        .inp{
          display: inline-block;
          text-align: center;
          width:px2rem(30);
          border: 1px solid #ccc;
          height:px2rem(20);
        }
      } 
    }
  }
  .allprice{
    padding-top:px2rem(10);
    padding-left:px2rem(220);
    .all{
      color:#ccc;
      .money{
        color:orangered;
      }
    }
    .mall{
      display: inline-block;
      width:px2rem(60);
      height:px2rem(25);
      background: greenyellow;
      text-align: center;
      line-height: px2rem(25);
    }
  }
 }
}
</style>
