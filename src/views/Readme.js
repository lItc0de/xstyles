import VueWithCompiler from 'vue/dist/vue.esm';
import { capitalize } from '@/utils/stringHelpers';
import parseMarkdown from '@/utils/parseMarkdown';
import XStyles from '@/components';

VueWithCompiler.use(XStyles);

export default {
  name: 'Readme',

  data() {
    return {
      readme: null,
    };
  },

  watch: {
    $route: {
      handler: 'getReadme',
      immediate: true,
    },
  },

  methods: {
    async fetchFile(component) {
      let file;
      try {
        file = await import(`../components/${component}/README.md`);
        return file.default;
      } catch (error) {
        console.log(error);

        return null;
      }
    },

    async getReadme() {
      const component = capitalize(this.$route.params.component.replace('X', ''));
      const markdown = await this.fetchFile(component);
      if (!markdown) {
        this.readme = '<h1>Not Found</h1>';
        return;
      }
      this.readme = markdown;
    },
  },

  render(createElement) {
    const { readme } = this;
    if (!readme) return createElement('div', 'Loading...');
    const components = parseMarkdown(readme).map((element, i) =>
      createElement(VueWithCompiler.component(`Component-${i}`, element)));

    return createElement('div', components);
  },
};
