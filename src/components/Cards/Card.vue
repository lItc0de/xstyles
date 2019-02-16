<template>
  <div class="card" :style="style">
    <slot>
      <x-container align-items="center">
        <x-spinner/>
      </x-container>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'XCard',

  props: {
    width: {
      type: [String, Number],
      default: 'initial',
    },
  },

  computed: {
    style() {
      const { toPx } = this.$options.filters;
      return {
        width: toPx(this.width),
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.card
  background-color rgba(255, 255, 255, .03)
  border-radius 2px
  box-shadow 0 0 7px var(--boxShadow)
  overflow hidden
  overflow-x auto
</style>
