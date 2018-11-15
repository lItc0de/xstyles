<template>
  <p class="text" :style="style"><slot/></p>
</template>

<script>
export default {
  name: 'XText',

  props: {
    title: {
      type: Boolean,
      default: false,
    },

    subtitle: {
      type: Boolean,
      default: false,
    },

    area: {
      type: String,
      default: '',
    },

    bold: {
      type: Boolean,
      default: false,
    },

    inline: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    style() {
      const style = {};
      if (this.subtitle) style.color = '#818181';
      if (this.title) {
        style.fontSize = '40px';
        style.lineHeight = '48px';
        style.fontWeight = 'bold';
      }
      if (this.area) style.gridArea = this.area;
      if (this.bold) style.fontWeight = 'bold';
      if (this.inline) style.display = 'inline';
      return style;
    },
  },
};
</script>

<style lang="stylus" scoped>
.text
  margin 0
</style>
