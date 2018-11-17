<template>
  <button :style="style" class="btn" @click="$emit('click')">
    <x-icon v-if="icon" v-bind="$attrs" :color="textColor"><slot/></x-icon>
    <slot v-else/>
  </button>
</template>

<script>
export default {
  name: 'XBtn',

  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: '#424242',
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

    area: {
      type: String,
      default: '',
    },

    textColor: {
      type: String,
      default: 'inherit',
    },
  },

  computed: {
    style() {
      const style = {
        backgroundColor: this.color,
        color: this.textColor,
      };

      if (this.depressed) style.boxShadow = 'none';

      if (this.flat) style.backgroundColor = 'transparent';

      if (this.icon) {
        style.boxShadow = 'none';
        style.backgroundColor = 'transparent';
        style.padding = 0;
      }

      if (this.area) style.gridArea = this.area;

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
