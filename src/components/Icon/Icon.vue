<template>
  <svgicon
    :icon="icon"
    :color="color"
    :height="height || scale"
    :width="width || scale"
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

    height: {
      type: String,
      default: '',
    },

    width: {
      type: String,
      default: '',
    },

    scale: {
      type: [String, Object],
      default: '1rem',
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
