<template>
  <div class="app" :style="style" ref="app"><slot/></div>
</template>

<script>
export default {
  name: 'XApp',

  computed: {
    style() {
      const {
        color,
        backgroundColor,
      } = this.$xstyles.theme.colors;

      return {
        color,
        backgroundColor,
      };
    },
  },

  head: {
    title: {
      inner: 'x-styles',
    },

    link() {
      const { fontUrl } = this.$xstyles.theme.typography;

      return [
        { rel: 'stylesheet', href: fontUrl },
      ];
    },
  },
};
</script>

<style lang="stylus" scoped>
.app
  height 100%
</style>
