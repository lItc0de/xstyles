<template>
  <div class="navigation-drawer" :style="style">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'XNavigationDrawer',

  props: {
    left: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      const { border } = this.$theme;
      const style = {};
      if (this.left) style.borderRight = `1px solid ${border}`;
      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.navigation-drawer
  max-height 100%
  overflow-y auto
  padding 1.5rem
</style>
