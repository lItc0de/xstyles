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
      const style = {};
      if (this.left) style.borderRight = '1px solid #424242';
      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.navigation-drawer
  max-height 100%
  overflow-y auto
  padding 24px 0
</style>
