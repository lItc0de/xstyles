<template>
  <li class="navigation-list-item">
    <template v-if="title">
      <h6 class="title mb-0"><slot/></h6>
    </template>
    <template v-else>
      <x-link v-if="to" :to="to" class="item-body"><slot/></x-link>
      <div v-else class="item-body"><slot/></div>
    </template>
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

    title: {
      type: Boolean,
      default: false,
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
