<template>
  <router-link class="link" :style="style" :to="to"><slot/></router-link>
</template>

<script>
export default {
  name: 'XLink',

  props: {
    to: {
      type: [String, Object],
      required: true,
    },

    subtitle: {
      type: Boolean,
      default: false,
    },

    title: {
      type: Boolean,
      default: false,
    },

    bold: {
      type: Boolean,
      default: false,
    },

    underline: {
      type: Boolean,
      default: false,
    },

    area: {
      type: String,
      default: '',
    },
  },

  computed: {
    style() {
      const { textSecondary } = this.$theme;
      const style = {};
      if (this.subtitle) style.color = textSecondary;
      if (this.title) {
        style.fontSize = '40px';
        style.lineHeight = '48px';
        style.fontWeight = 'bold';
      }
      if (this.area) style.gridArea = this.area;
      if (this.bold) style.fontWeight = 'bold';
      if (!this.underline) style.textDecoration = 'none';
      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.link
  color inherit
  text-decoration none
  &:hover
    text-decoration underline
</style>
