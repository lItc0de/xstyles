<template>
  <div class="tabs">
    <x-tabs-slider :tabs="tabs" v-model="tab"/>
    <slot v-if="tab" :name="tab"/>
  </div>
</template>

<script>
export default {
  name: 'XTabs',

  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      tab: null,
    };
  },

  watch: {
    tabs: {
      handler() { [this.tab] = this.tabs; },
      immediate: true,
    },
  },
};
</script>
