<template>
<div class="set">
    <div class="haed">
      <router-link class="iconfont icon-zuojiantou" tag="i" to="/center"></router-link>
      <span>设置</span>
      <span class="span1"></span>
  </div>
  <div class="main">
  <div class="id">
    <span>账号ID</span>
    <span>23457</span>
  </div>
  <div class="pwd">
  <div class="pwd1"><span>登录密码</span><span>未设置</span></div> 
  <div class="pwd2"><span>安全密码</span><span>未设置</span></div> 
  </div>
  <div class="ruanjian">
  <div class="banben"><span>软件版本</span></div> 
  <div class="yijian"><span>意见反馈</span></div>
  </div> 
  <div class="huncun"><span>清除缓存</span><span>0.1KB</span></div>
</div>
<div class="loginout">
退出登录
</div>
 </div>
</template>
<script>
export default {
  name: 'Card'
};
</script>
<style lang='scss'>
@import "@/styles/common/px2rem.scss";
.set {
  background: #f5f5f5 ;
  display: flex;
  flex-direction: column;
  flex:1;
  .haed {
    background: white;
    flex:1;
    display: flex;
    i {
      flex: 1;
      display: inline-block;
      color: #191a1b;
      font-size: 23px;
      line-height: px2rem(50);
    }
    span {
      flex: 3;
      width: px2rem(100);
      line-height: px2rem(50);
      text-align: center;
      font-size: px2rem(18);
    }
    .span1 {
      flex: 1;
    }
  }
  .main{
    height:px2rem(580);
    .id{
      margin-top:px2rem(10);
      display: flex;
      justify-content: space-between;
      padding:0 px2rem(10);
      height:px2rem(40);
      background: white;
      font-size:px2rem(18);
      line-height: px2rem(40);
    }
    .pwd{
      padding:0 px2rem(10);
      margin-top:px2rem(10);
      height:px2rem(80);
      background: white;
      .pwd1{
        display: flex;
      justify-content: space-between;
        height:px2rem(40);
        font-size:px2rem(18);
      line-height: px2rem(40);
        border-bottom: 1px solid #f5f5f5;
      }
      .pwd2{
        display: flex;
      justify-content: space-between;
        height:px2rem(40);
        font-size:px2rem(18);
      line-height: px2rem(40);
      }
    }
    .ruanjian{
      padding:0 px2rem(10);
      margin-top:px2rem(10);
      height:px2rem(80);
      background: white;
      .banben{
        height:px2rem(40);
        font-size:px2rem(18);
       line-height: px2rem(40);
       border-bottom: 1px solid #f5f5f5;
      }
      .yijian{
        height:px2rem(40);
        font-size:px2rem(18);
       line-height: px2rem(40);
      }
    }
    .huncun{
      display: flex;
      justify-content: space-between;
      padding:0 px2rem(10);
      margin-top:px2rem(10);
      height:px2rem(40);
      font-size:px2rem(18);
      line-height: px2rem(40);
      background: white;
    }

  }
  .loginout{
    height:px2rem(40);
    color: orangered;
    font-size:px2rem(20);
    text-align: center;
    line-height: px2rem(40);
    background: white;
  }
}
</style>
