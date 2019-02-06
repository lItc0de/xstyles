<template>
  <h1 class="title"><slot/></h1>
</template>

<script>
export default {
  name: 'XTitle',
};
</script>

<style lang="stylus" scoped>
.title
  text-overflow ellipsis
  overflow hidden
  font-size 4rem
  line-height 4.5rem
  margin 0 0 3rem 0
  font-weight bold
  border-left .25rem solid var(--primary)
  padding-left 1rem
</style>
