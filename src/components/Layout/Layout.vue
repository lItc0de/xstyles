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
screenMax = 1080px
fontSizeItem = 1rem
fontSizeTitle = 1.5rem

.layout
  display grid
  grid-template-columns 250px 1fr
  grid-template-areas "navigation content"
  min-height 100%

  .content
    grid-area content

  .navigation
    grid-area navigation
    position fixed
    overflow-y auto

@media (max-width: screenMax)
  .layout
    grid-template-columns 70px 1fr

  .navigation
    >>> .title
      font-size 0

      &::first-letter
        font-size fontSizeTitle

    >>> .item-body
      font-size 0 !important

      &::first-letter
        font-size fontSizeItem

    &:hover
      z-index 1
      position fixed
      height 100%
      background-color rgba(255, 255, 255, .9)

      >>> .title
        font-size fontSizeTitle

      >>> .item-body
        font-size fontSizeItem !important
</style>
