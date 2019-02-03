import { createLocalVue, shallowMount } from '@vue/test-utils';

import ScrollArea from '../ScrollArea';

const localVue = createLocalVue();

describe('ScrollArea', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ScrollArea, {
      localVue,
      props: {
        fetchNew: jest.fn(),
      },
    });
  });

  describe('template', () => {
    it('renders a div', () => {
      expect(wrapper.find('div').exists()).toBe(true);
    });
  });

  describe('endless scrolling', () => {
    it('should ', () => {

    });
  });
});
