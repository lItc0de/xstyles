<template>
  <ul class="tabs-slider">
    <li
      v-for="tab in tabs"
      :key="tab"
      :class="['slider-item', (tab === value ? 'active' : null)]"
      @click="(e) => handleClick(e, tab)"
    >
      {{ tab }}
    </li>
  </ul>
</template>

<script>
import { rippleMixin } from '../../mixins/styling';

export default {
  name: 'XTabsSlider',

  mixins: [rippleMixin],

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

  methods: {
    handleClick(e, tab) {
      this.rippleMixin(e);
      this.$emit('input', tab);
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
  border-bottom 1px solid var(--border)

  .slider-item
    position relative
    list-style none
    padding 8px
    cursor pointer
    overflow hidden

    &.active::after
      position absolute
      content ''
      display block
      width 100%
      border-bottom 3px solid var(--primary)
      left 0
      bottom -1px
</style>
