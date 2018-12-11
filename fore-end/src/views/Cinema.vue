<template>
    <div class="cinemas-list">
        <h1>我是影院</h1>
    </div>
</template>

<script>
export default {
  name: 'Cinemas'
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import '@/styles/common/px2rem.scss';
.cinemas-list {
  flex: 1;
  overflow-y: auto;
}
</style>
