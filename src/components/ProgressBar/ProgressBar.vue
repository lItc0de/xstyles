<template>
  <div class="progress-bar">
    <div>{{ internalPosition | msToMinSec }}</div>
    <div
      class="bar"
      :style="barStyle"
    >
      <div
        class="progress"
        :style="progressStyle"
      ></div>
      <div class="slider" :style="sliderStyle"></div>
    </div>
    <div>{{ duration | msToMinSec }}</div>
  </div>
</template>

<script>
export default {
  name: 'XProgressBar',

  props: {
    backgroundColor: {
      type: String,
      default() { return this.$theme.backgroundColorLight; },
    },
    color: {
      type: String,
      default() { return this.$theme.backgroundColor; },
    },
    sliderColor: {
      type: String,
      default() { return this.$theme.color; },
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
    position: {
      type: [Number, String],
      required: true,
    },
    duration: {
      type: [Number, String],
      required: true,
    },
    paused: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      internalPosition: this.position,
    };
  },

  computed: {
    barStyle() {
      return {
        backgroundColor: this.backgroundColor,
        borderRadius: this.radius,
        height: this.height,
      };
    },

    progressStyle() {
      return {
        backgroundColor: this.color,
        borderRadius: this.radius,
        height: this.height,
        width: `${this.percentage}%`,
      };
    },

    sliderStyle() {
      return {
        backgroundColor: this.sliderColor,
        borderRadius: `calc(${this.radius} + 2px)`,
        height: `calc(${this.height} + 4px)`,
        width: `calc(${this.height} + 4px)`,
        left: `calc(${this.percentage}% - ${this.height} + 2px)`,
      };
    },

    percentage() {
      return ((this.internalPosition / this.duration) * 100);
    },
  },

  methods: {
    timer() {
      const that = this;
      if (this.paused) return;
      setTimeout(() => {
        if (that.duration <= that.internalPosition) return;
        that.internalPosition += 100;
        that.timer();
      }, 100);
    },
  },

  watch: {
    paused: {
      immediate: true,
      handler: 'timer',
    },
  },
};
</script>

<style lang="stylus" scoped>
.progress-bar
  display grid
  grid-template-columns auto 1fr auto
  grid-column-gap 8px
  align-items center
  width 100%

  .bar
    flex 1
    position relative

  .progress
    position absolute

  .slider
    position absolute
    display inline-block
    margin-top -2px
</style>
