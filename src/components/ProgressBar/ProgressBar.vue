<template>
  <div
    class="progress-bar"
    :style="style"
  >
    <span
      class="bar"
      :style="barStyle"
    >
    </span>
    <span class="slider" :style="sliderStyle"></span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  props: {
    backgroundColor: {
      type: String,
      default: '#eee',
    },
    color: {
      type: String,
      default: '#aaa',
    },
    sliderColor: {
      type: String,
      default: '#666',
    },
    radius: {
      type: String,
      default: '4px',
    },
    height: {
      type: String,
      default: '8px',
    },
    bufferValue: {
      type: Number,
      default: 100,
    },
    value: {
      type: [Number, String],
      required: true,
    },
  },

  computed: {
    style() {
      return {
        backgroundColor: this.backgroundColor,
        borderRadius: this.radius,
        height: this.height,
      };
    },

    barStyle() {
      return {
        backgroundColor: this.color,
        borderRadius: this.radius,
        height: this.height,
        width: `${this.value}%`,
      };
    },

    sliderStyle() {
      return {
        backgroundColor: this.sliderColor,
        borderRadius: `calc(${this.radius} + 2px)`,
        height: `calc(${this.height} + 4px)`,
        width: `calc(${this.height} + 4px)`,
        top: '-2px',
        left: `calc(${this.value}% - ${this.height} + 2px)`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
.progress-bar
  position relative
  width 100%

  .bar
    position absolute
    left 0
    top 0
    display inline-block

  .slider
    position absolute
    display inline-block
</style>

