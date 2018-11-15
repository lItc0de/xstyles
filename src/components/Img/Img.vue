<template>
  <x-a class="img" v-if="to" :to="to" :style="style">
    <div v-if="background" class="bg-img" :style="bgStyle"/>
    <img v-else class="img-image" :src="src">
    <slot/>
  </x-a>
  <div v-else class="img" :style="style">
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
    to: {
      type: [String, Object],
      default: null,
    },

    background: {
      type: Boolean,
      default: false,
    },

    width: {
      type: [Number, String],
      default: 'initial',
    },

    area: {
      type: String,
      default: '',
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

      if (this.area) style.gridArea = this.area;

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

<style lang="stylus">
.card > .img .bg-img
  border-radius 2px 2px 0 0
</style>
