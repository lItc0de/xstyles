<template>
  <button :style="style" class="btn" @click="handleClick">
    <x-icon v-if="icon" size="2rem"><slot/></x-icon>
    <slot v-else/>
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
    },

    flat: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
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

      if (this.icon) {
        style.boxShadow = 'none';
        style.backgroundColor = this.backgroundColor || 'transparent';
        style.borderRadius = '50%';
      }

      return { ...this.colorMixin, ...this.fontMixin, ...style };
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn
  position relative
  border none
  outline none
  cursor pointer
  background #89669b
  padding .25rem .5rem
  border-radius var(--borderRadius)
  font-size 2rem
  font inherit
  font-weight bold
  line-height 2.5rem
  box-shadow 0 3px 3px rgba(0, 0, 0, 0.2)
  overflow hidden
</style>
