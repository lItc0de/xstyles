<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'XLayout',
};
</script>

<style lang="stylus" scoped>
.layout
  display grid
  grid-template-columns 150px auto
  grid-column-gap .5rem
  padding-right .5rem
  min-height 100%
</style>
