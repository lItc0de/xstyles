<template>
  <prism class="prism" v-bind="$attrs"><slot/></prism>
</template>

<script>
import Prism from 'vue-prism-component';

export default {
  name: 'XCode',

  inheritAttrs: false,

  components: {
    Prism,
  },
};
</script>

<style lang="stylus" scoped>
.prism
  margin 0
  padding 1.5rem
  border-radius var(--borderRadius)
  background-color var(--color)
</style>
