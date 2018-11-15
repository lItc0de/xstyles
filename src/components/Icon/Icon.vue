<template>
  <i
    :style="style"
    :class="`icon mdi mdi-${$slots.default[0].text}`"
  />
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    color: {
      type: String,
      default: '#666',
    },

    size: {
      type: [String, Number],
      default: 24,
    },
  },

  computed: {
    style() {
      const { toPx } = this.$options.filters;
      const { size } = this;
      const sizeStr = toPx(size);
      return {
        color: this.color,
        width: sizeStr,
        height: sizeStr,
        fontSize: `calc(${sizeStr} - 6px)`,
        lineHeight: sizeStr,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon
  display inline-block
  text-align center
</style>
