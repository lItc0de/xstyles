<template>
  <x-link :to="to" class="grid-img">
    <x-img :src="img || ''" />
    <x-text class="text" slim>{{ title }}</x-text>
    <x-text color="colorSecondary" size=".8rem" slim>{{ subtitle }}</x-text>
  </x-link>
</template>

<script>
export default {
  name: 'XGridImg',

  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.grid-img
  overflow hidden
  white-space nowrap

  &.link:hover
    text-decoration none

  > img
    box-shadow 0 0 7px var(--boxShadow)
</style>
