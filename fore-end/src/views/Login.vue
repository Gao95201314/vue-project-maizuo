<template>
   <div>
    <header id="header">
      <div class="logo"></div>
      <div class="sj">
        <input type="text" placeholder="手机号" v-model="phoneInput">
        <span>获取验证码</span>
      </div>
      <div class="yzm">
        <input type="text" placeholder="验证码" v-model="codeInput">
      </div>
      <button @click="handleLogin" :disabled="isDisabled">登录</button>
    </header>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Login',
  data () {
    return {
      phoneInput:'',
      codeInput:''
    }
  },
  computed: {
    isDisabled () {
      if (this.phoneInput && this.codeInput) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
      handleLogin () {
        axios.get('/static/api/user.json',{
          params:{
            phone:this.phoneInput,
            code:this.codeInput
          }
        }).then(res => {
          var result=res.data;
          console.log(result);
          let index=-1;
          let isZai=result.some((item,i) => {
            if (this.phoneInput===item.phone) {
              index=i;
              return true;
            }
            return false;
          })
          console.log(index);
          if (isZai) {
            if (result[index].code===this.codeInput) {
            localStorage.setItem('userphone',this.phoneInput);
            // var myNeedPage = localStorage.getItem('myNeedPage')
            //this.$router.push(redirect);
            let redirect = this.$route.query.redirect;
            this.$router.push(redirect);
          } else {
            console.log('手机号或验证码错误');
          }
          }
        })
      }
    }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
#header {
  height: px2rem(500);
  display: flex;
  flex-direction: column;
  .logo {
    // flex: 1;
    width: px2rem(100);
    height: px2rem(100);
    background: url(../images/logo.jpg) no-repeat;
    background-size: 100%;
    margin: px2rem(100) auto;
  }
  .sj,
  .yzm {
    display: flex;
    height: px2rem(55);
    margin: px2rem(10) px2rem(25);
    border-bottom: px2rem(1) solid #ccc;
    input {
      width: 70%;
      font-size: px2rem(18);
      border: none;
    }
    span {
      width: 30%;
      font-size: px2rem(18);
      color: #ccc;
      display: flex;
      align-self: center;
    }
  }
  button {
    display: flex;
    justify-content: center;
    height: px2rem(80);
    margin: px2rem(20) px2rem(25);
    background: #ff5f16;
    font-size: px2rem(20);
    text-align: center;
    color: white;

    &[disabled]{
      background: #ccc;
    }
  }
}
</style>
