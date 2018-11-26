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
      } = this.$theme;

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

    style() {
      const { $theme } = this;
      const variables = Object.keys($theme).map(key => `--${key}: ${$theme[key]};`).join('');

      return [
        {
          type: 'text/css',
          inner: `
            :root { ${variables} }
          `,
          undo: false,
        },
      ];
    },

    link() {
      const { fontUrl } = this.$theme;

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
