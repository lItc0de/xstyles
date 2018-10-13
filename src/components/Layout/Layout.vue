<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="stylus" scoped>
.layout
  display grid
  grid-template-columns 150px auto
  grid-column-gap 8px
  padding-right 8px
  min-height 100%
</style>

