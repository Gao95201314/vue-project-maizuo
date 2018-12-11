<template>
    <div class="films-list">
        <h1>我是电影页面-首页</h1>
    </div>
</template>

<script>
export default {
  name: 'Films'
}
</script>

<style lang="scss">
@import '../styles/common/px2rem.scss';

.films-list {
  flex: 1;
  overflow-y: auto;
}
</style>
