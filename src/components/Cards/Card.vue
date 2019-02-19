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
  background-color var(--backgroundColorLight)
  border-radius var(--borderRadius)
  box-shadow var(--boxShadowSpread) var(--boxShadow)
  overflow hidden
  overflow-x auto
</style>
