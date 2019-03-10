<template>
  <button :style="style" class="btn" @click="handleClick">
    <slot/>
  </button>
</template>

<script>
import { fontMixin, colorMixin, rippleMixin } from '../../mixins/styling';

export default {
  name: 'XBtn',

  mixins: [fontMixin, colorMixin, rippleMixin],

  inheritAttrs: false,

  props: {
    depressed: {
      type: Boolean,
      default: false,
      description: 'removes the box shadow',
    },

    flat: {
      type: Boolean,
      default: false,
      description: 'sets the background to transparent',
    },
  },

  methods: {
    handleClick(e) {
      this.rippleMixin(e);
      this.$emit('click');
    },
  },

  computed: {
    style() {
      const style = {};

      if (this.depressed) style.boxShadow = 'none';

      if (this.flat) style.backgroundColor = 'transparent';

      return { ...this.colorMixin, ...this.fontMixin, ...style };
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn
  border none
  border-radius var(--borderRadius)
  box-shadow 0 3px 3px rgba(0, 0, 0, 0.2)
  cursor pointer
  font inherit
  font-size 2rem
  font-weight bold
  line-height 2.5rem
  outline none
  overflow hidden
  padding .25rem .5rem
  position relative
</style>
