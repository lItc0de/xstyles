<template>
  <router-link class="link" :style="style" :to="to"><slot/></router-link>
</template>

<script>
import { fontMixin, colorMixin } from '../../mixins/styling';

export default {
  name: 'XLink',

  mixins: [fontMixin, colorMixin],

  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },

  computed: {
    style() {
      const style = {};
      if (!this.underline) style.textDecoration = 'none';

      return { ...this.fontMixin, ...this.colorMixin };
    },
  },
};
</script>

<style lang="stylus" scoped>
.link
  text-decoration none
  &:hover
    text-decoration underline
</style>
