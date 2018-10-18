<template>
  <button :style="style" class="btn">
    <icon v-if="icon" v-bind="$attrs"><slot/></icon>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  name: 'Btn',

  props: {
    color: {
      type: String,
      default: '#eee',
    },

    depressed: {
      type: Boolean,
      default: false,
    },

    flat: {
      type: Boolean,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      const style = {
        backgroundColor: this.color,
      };

      if (this.depressed) {
        style.boxShadow = 'none';
      }

      if (this.flat) {
        style.boxShadow = 'none';
      }

      if (this.icon) {
        style.boxShadow = 'none';
        style.backgroundColor = 'transparent';
        style.padding = 0;
      }

      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.btn
  border none
  outline none
  cursor pointer
  font-size 16px
  line-height 20px
  padding 4px 8px
  border-radius 2px
  box-shadow 0 3px 3px rgba(0, 0, 0, 0.2)
  margin 0 4px
</style>
