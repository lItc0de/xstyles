import { shallowMount, createLocalVue } from '@vue/test-utils';
import Readme from '@/views/Readme';

describe('Readme', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Readme, {
      methods: {
        loadFile: jest.fn().mockReturnValue('# Bar'),
      },
    });
  });

  describe('methods', () => {
    describe('loadFile', () => {
      it('returns the loaded file', () => {
        expect(true).toBe(true);
      });
    });

    describe('parseFile', () => {
      it('returns an array of vue components from the readme', () => {
        const markdown = `
          # Foo
          \`\`\`
          // vuejs
          <template><p>bar</p></template>
          <script>export default {
            data() {
              return {
                test: 'test',
              };
            },
          }</script>
          \`\`\`
          \`bla\`
        `;
        wrapper.setMethods({
          loadFile: jest.fn().mockReturnValueOnce(markdown),
        });

        wrapper.vm.parseFile();

        expect(wrapper.vm.contentArr[0]).toEqual({ template: '<h1>Foo</h1>' });
        expect(wrapper.vm.contentArr[1].template).toEqual('<p>bar</p>');
        expect(wrapper.vm.contentArr[1].data()).toEqual({ test: 'test' });
        expect(wrapper.vm.contentArr[2]).toEqual({ template: '<p><code>bla</code></p>' });
      });
    });
  });

  describe('remder', () => {
    it('should return a valid vue component', () => {
      debugger;
      expect(wrapper.find('h1').text()).toEqual('Foo');
    });
  });
});
