<template>
  <p class="text" :style="style"><slot/></p>
</template>

<script>
import { fontMixin, colorMixin } from '../../mixins/styling';

export default {
  name: 'XText',

  mixins: [fontMixin, colorMixin],

  props: {
    title: {
      type: Boolean,
      default: false,
    },

    subtitle: {
      type: Boolean,
      default: false,
    },

    underline: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      const style = {};
      const { primary } = this.$xstyles.theme.colors;

      if (this.underline) style.textDecoration = 'underline';

      if (this.title) {
        style.fontSize = '4rem';
        style.lineHeight = '4.5rem';
        style.margin = '0 0 1rem 0';
        style.fontWeight = 'bold';
        style.borderLeft = `.25rem solid ${primary}`;
        style.paddingLeft = '1rem';
      }

      if (this.subtitle) {
        style.fontSize = '2rem';
        style.lineHeight = '2.5rem';
        style.fontWeight = 'bold';
      }

      return { ...this.fontMixin, ...this.colorMixin, ...style };
    },
  },
};
</script>

<style lang="stylus" scoped>
.text
  text-overflow ellipsis
  overflow hidden
  margin 0 0 .5rem 0
</style>
