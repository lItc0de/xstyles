<template>
  <div class="card" :style="style"><slot/></div>
</template>

<script>
export default {
  name: 'XCard',

  props: {
    width: {
      type: [String, Number],
      default: 'initial',
    },
  },

  computed: {
    style() {
      const { toPx } = this.$options.filters;
      return {
        width: toPx(this.width),
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.card
  background-color var(--backgroundColor)
  border-radius 2px
  box-shadow 0 0 7px var(--boxShadow)
</style>
