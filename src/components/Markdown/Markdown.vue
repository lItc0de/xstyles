<template>
  <div class="markdown" v-html="parsedMd" />
</template>

<script>
import MarkdownIt from 'markdown-it';
import prism from 'markdown-it-prism';

const md = new MarkdownIt();

md.use(prism);

export default {
  name: 'XMarkdown',

  computed: {
    parsedMd() {
      if (!this.$slots.default[0]) return '';
      const input = this.$slots.default[0].text;
      return md.render(input);
    },
  },
};
</script>

<style lang="stylus" scoped>
.markdown
  width 100%
.markdown >>> pre
  border-radius var(--borderRadius)
  background-color var(--color)
  overflow: auto

  code
    padding 0
</style>
