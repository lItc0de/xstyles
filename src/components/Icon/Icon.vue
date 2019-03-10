<template>
  <svgicon
    :icon="icon"
    :color="color"
    :dir="dir"
    :fill="fill"
    :height="height"
    :width="width"
    :scale="scale"
    :title="title || icon"
  />
</template>

<script>
export default {
  name: 'XIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: 'var(--color)',
    },

    dir: {
      type: [String, Object],
      default: null,
    },

    fill: {
      type: Boolean,
      default: true,
    },

    height: {
      type: String,
      default: '1rem',
    },

    width: {
      type: String,
      default: '1rem',
    },

    scale: {
      type: [String, Object],
      default: '1',
    },

    title: {
      type: [String, Object],
      default: null,
    },
  },

  // methods: {
  //   async importIcon() {
  //     try {
  //       await import(`@/assets/svg-icons/${this.icon}`);
  //     } catch (error) {
  //       console.warn(error.message, '| Please provide the svg icon');
  //     }
  //   },
  // },

  // created() {
  //   this.importIcon();
  // },
};
</script>
