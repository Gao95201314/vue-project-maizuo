<template>
<div class="card">
    <div class="haed">
      <router-link class="iconfont icon-shouye" tag="i" to="/films/nowPlaying"></router-link>
      <span>余额明细</span>
      <span class="span1"></span>
  </div>
  <div class="account">
     <p>当前余额</p>
    <span>￥</span><span class="span1">0.00</span>
  </div>
  <div class="tu">
    <img src="../images/account.png" alt="">
    <p>暂无余额使用明细</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
<style lang='scss'>
@import "@/styles/common/px2rem.scss";
.card{
  height:100%;
  .haed{
    display: flex;
  i{
    flex:1;
    display:inline-block;
    color: #191a1b;
    font-size: 23px;
    line-height: px2rem(50);
  }
  span{
    flex:3;
    width:px2rem(100);
    line-height: px2rem(50);
    text-align: center;
    font-size:px2rem(18);
  }
  .span1{
    flex:1;
  }
}
.account{
  width:100%;
  height:px2rem(200);
  background: orangered;
  text-align: center;
  color:white;
  padding-top:px2rem(80);
  span{
    font-size: px2rem(30);
  }
}
.tu{
  text-align: center;
  margin-top:px2rem(100);
   margin-left:px2rem(90);
    width:px2rem(200);
    height:px2rem(200);
  img{
    width:px2rem(100);
    height:px2rem(100);
  }
}
}

</style>
