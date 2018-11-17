<template>
  <li class="navigation-list-item">
    <router-link v-if="to" :to="to" class="item-body"><slot/></router-link>
    <div v-else class="item-body"><slot/></div>
  </li>
</template>

<script>
export default {
  name: 'XNavigationListItem',

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
    padding 8px
    cursor pointer
    color inherit
    text-decoration none
    &:hover
      background-color var(--backgroundColorLight)
</style>
