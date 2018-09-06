<template>
  <div v-html="html">
  </div>
</template>

<script>
import { markdown } from 'markdown'; // eslint-disable-line

export default {
  name: 'Readme',

  data() {
    return {
      html: '',
    };
  },

  watch: {
    $route: {
      handler: 'getReadme',
      immediate: true,
    },
  },

  methods: {
    async getReadme() {
      try {
        const readme = await import(`@/components/${this.$route.params.component}/README.md`);
        this.html = markdown.toHTML(readme.default);
      } catch (error) {
        this.html = markdown.toHTML('#No README');
      }
    },
  },
};
</script>

