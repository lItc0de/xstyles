<template>
  <li class="navigation-list-item">
    <x-link v-if="to" :to="to" class="item-body"><slot/></x-link>
    <div v-else class="item-body"><slot/></div>
  </li>
</template>

<script>
export default {
  name: 'XNavigationLi',

  props: {
    to: {
      type: [Object, String],
      default: null,
    },
  },
};
</script>

<style lang="stylus" scoped>
.navigation-list-item
  list-style none

  .item-body
    display block
    padding .5rem
    cursor pointer
    color inherit
    text-decoration none
    &:hover
      background-color var(--backgroundColorLight)
</style>
