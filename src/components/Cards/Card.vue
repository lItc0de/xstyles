<template>
  <div class="card" :style="style">
    <x-container v-if="showSpinner" align-items="center">
      <x-spinner/>
    </x-container>
    <slot v-else/>
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

    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      const { toPx } = this.$options.filters;
      return {
        width: toPx(this.width),
      };
    },

    showSpinner() {
      return !this.$slots.default || this.loading;
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
