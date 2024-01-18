import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import BaseDropdown from '@/components/BaseDropdown.vue';

describe('BaseDropdown', () => {
  it('displays the correct number of buttons', () => {
    const dates = [1706004000,1706004000];
    const wrapper = mount(BaseDropdown, {
      propsData: { dates },
    });
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(dates.length);
  });
});
