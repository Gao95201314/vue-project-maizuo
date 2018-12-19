<template>
  <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-zuojiantou"></div>
        </router-link>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../../styles/common/px2rem.scss';
.header{
  overflow: hidden;
  height:px2rem(50);
  line-height: px2rem(50);
  text-align: center;
  color: block;
  background: aqua;
  font-size: px2rem(18);
  .icon-zuojiantou{
    position: absolute;
    left: 0;
    top: 0;
    font-size: px2rem(20);
    text-align: center;
    color: block;
  }
}
</style>
