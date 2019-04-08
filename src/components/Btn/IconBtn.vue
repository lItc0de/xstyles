<template>
  <button class="icon-btn" :style="style" v-on="$listeners">
    <svgicon
      :icon="icon"
      :color="color"
      :height="height || scale"
      :width="width || scale"
      :title="title || icon"
    />
  </button>
</template>

<script>
import XIcon from '../Icon/Icon.vue';
import { colorMixin } from '../../mixins/styling';

export default {
  name: 'XIconBtn',

  extends: XIcon,

  mixins: [colorMixin],

  computed: {
    style() {
      const { width, height, scale } = this;
      const style = {
        width: width || scale,
        height: height || scale,
      };

      return { ...this.colorMixin, ...style };
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon-btn
  box-sizing: content-box;
  border-radius 50%
  border none
  cursor pointer
  outline none
  overflow hidden
  padding .5rem
  position relative
</style>
