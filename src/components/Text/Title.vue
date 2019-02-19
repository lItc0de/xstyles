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
  border-left .25rem solid var(--primary)
  margin 0 0 3rem 0
  overflow hidden
  padding-left 1rem
  text-overflow ellipsis
</style>
