<template>
  <ul class="navigation-list">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'XNavigationList',
};
</script>

<style lang="stylus" scoped>
.navigation-list
  padding 0
  margin 0
</style>
