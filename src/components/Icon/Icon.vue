<template>
  <i
    :style="style"
    :class="`icon mdi mdi-${$slots.default[0].text}`"
  />
</template>

<script>
import { fontMixin, colorMixin } from '../../mixins/styling';

export default {
  name: 'XIcon',

  mixins: [fontMixin, colorMixin],

  computed: {
    style() {
      const style = {
      };

      return { ...this.colorMixin, ...this.fontMixin, ...style };
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon
  display inline-block
  text-align center
</style>
