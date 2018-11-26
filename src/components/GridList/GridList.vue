<template>
  <div class="grid-list" :style="style"><slot/></div>
</template>

<script>
export default {
  name: 'XGridList',

  props: {
    columns: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    style() {
      return {
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.grid-list
  display grid
  grid-gap 1.5rem
  justify-items stretch
</style>
