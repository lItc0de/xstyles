import { getFilePartsArr, parse } from '@/utils/parseMarkdown';
import { capitalize } from '@/utils/stringHelpers';
import Vue from 'vue';

export default {
  name: 'Readme',

  data() {
    return {
      contentArr: [],
    };
  },

  watch: {
    $route: {
      handler: 'parseFile',
      immediate: true,
    },
  },

  methods: {
    async loadFile() {
      const component = capitalize(this.$route.params.component);
      return (await import(`../components/${component}/README.md`)).default;
    },

    parseFile() {
      let markdown;
      try {
        markdown = this.loadFile();
      } catch (error) {
        markdown = '#No README';
      }

      const chunks = getFilePartsArr(markdown);

      if (!chunks) return;

      this.contentArr = chunks.reduce((arr, chunk) => {
        arr.push(parse(chunk));
        return arr;
      }, []);
    }
  },

  render(createElement) {
    debugger;
    return createElement('div', [
      createElement(Vue.compile('<h1>Foo</h1>').render),
      createElement('<h1>bla</h1>'),
    ]);
  },
};
