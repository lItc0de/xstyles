<template>
  <div class="container" :style="style"><slot/></div>
</template>

<script>
import { alignmentMixin, spacingMixin } from '../../mixins/styling';

export default {
  name: 'XContainer',

  mixins: [alignmentMixin, spacingMixin],

  computed: {
    style() {
      return { ...this.alignmentMixin, ...this.spacingMixin };
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-flow column
  flex-wrap wrap
  padding 1.5rem
</style>
