import { shallowMount } from '@vue/test-utils';

import Btn from './Btn.vue';

const theme = { colors: [] };

const $xstyles = { theme };

describe('Btn', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Btn, {
      mocks: {
        $xstyles,
      },
    });
  });

  it('emits click on click', () => {
    wrapper.trigger('click');

    expect(wrapper.emitted('click').length).toBe(1);
  });
});
