<template>
  <ul class="tabs-slider">
    <li
      v-for="tab in tabs"
      :key="tab"
      :class="['slider-item', (tab === value ? 'active' : null)]"
      @click="$emit('input', tab)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'XTabsSlider',

  props: {
    tabs: {
      type: Array,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.tabs-slider
  display flex
  flex-flow row
  margin 0
  padding 0
  border-bottom 1px solid #424242

  .slider-item
    position relative
    list-style none
    padding 8px
    cursor pointer
    &:hover
      background-color #424242
    &.active::after
      position absolute
      content ''
      display block
      width 100%
      border-bottom 3px solid #ff0043
      left 0
      bottom -1px
</style>

