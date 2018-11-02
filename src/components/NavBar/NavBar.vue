<template>
  <div class="nav-bar"><slot/></div>
</template>

<script>
export default {
  name: 'XNavBar',

};
</script>

<style lang="stylus" scoped>
.nav-bar
  height 100%
  border-right 1px solid #aaa
</style>
