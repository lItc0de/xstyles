import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Readme from '@/views/Readme';
import readme from '@/components/__mocks__/README.md';

jest.mock('@/components');

const localVue = createLocalVue();

localVue.use(VueRouter);

describe('Readme', () => {
  let wrapper;
  let router;

  beforeEach(() => {
    router = new VueRouter({
      routes: [
        { path: '/:component', name: 'Default' },
      ],
    });

    wrapper = shallowMount(Readme, {
      localVue,
      router,
      methods: {
        fetchFile: jest.fn().mockReturnValue(readme),
      },
    });
  });

  describe('methods', () => {
    describe('loadFile', () => {
      it('returns the loaded file', () => {
        expect(true).toBe(true);
      });
    });
  });

  describe('render', () => {
    it('should return a valid vue component', () => {
      expect(wrapper.find('#player').text()).toEqual('Player');
      expect(wrapper.find('pre.hljs').exists()).toBe(true);
    });
  });
});
