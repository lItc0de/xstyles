<template>
  <div class="layout">
    <div class="navigation">
      <slot name="navigation"></slot>
    </div>
    <div class="content">
      <slot/>
    </div>
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
  grid-template-columns 250px minmax(0, 1fr)
  grid-template-areas "navigation content"
  min-height 100%

  .content
    grid-area content

  .navigation
    background-color var(--backgroundColor)
    grid-area navigation
    position fixed
    overflow-y auto
    min-height 100%
</style>
