export default {
  name: 'XScrollArea',

  data() {
    return {
      isLoading: false,
      isTimeout: false,
      isBottom: false,
    };
  },

  props: {
    fetchNew: {
      type: Function,
      required: true,
    },
  },

  mounted() {
    debugger;
  },

  render(createElement) {
    return createElement(
      'div',
      this.$slots.default,
    );
  },
};
