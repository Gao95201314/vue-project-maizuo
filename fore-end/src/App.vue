<template>
  <div id="app">
    <NavBar></NavBar>

    <div class="nav-bar">wo shiyige da div </div>
  </div>
</template>

<script>
// 引入组件
import NavBar from './components/NavBar/index';

export default {
  name: 'App',

  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import './styles/base.scss';
</style>
