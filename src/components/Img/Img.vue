<template>
  <div class="img" :style="style">
    <div v-if="background" class="bg-img" :style="bgStyle"/>
    <img v-else class="img-image" :src="src">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'XImg',

  props: {
    src: {
      type: String,
      required: true,
    },

    background: {
      type: Boolean,
      default: false,
    },

    width: {
      type: [Number, String],
      default: 'initial',
    },
  },

  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.src})`,
      };
    },

    style() {
      const { toPx } = this.$options.filters;
      const { width } = this;
      const style = {
        width: toPx(width),
      };

      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.img
  text-overflow ellipsis
  overflow: hidden;
  .img-image
    width 100%
    border-radius 2px
  .bg-img
    height 200px
</style>
