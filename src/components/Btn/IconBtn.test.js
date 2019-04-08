import { shallowMount } from '@vue/test-utils';

import IconBtn from './IconBtn.vue';

const theme = { colors: [] };

const $xstyles = { theme };

describe('IconBtn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IconBtn, {
      propsData: {
        icon: 'bat',
      },
      mocks: {
        $xstyles,
      },
      stubs: {
        svgicon: '<svg/>',
      },
    });
  });

  it('emits click on click', () => {
    wrapper.trigger('click');

    expect(wrapper.emitted('click').length).toBe(1);
  });
});
