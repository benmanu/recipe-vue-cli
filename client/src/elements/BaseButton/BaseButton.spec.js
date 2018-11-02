import { shallowMount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton.vue', () => {
  it('renders props.text when passed', () => {
    const text = 'new button';
    const wrapper = shallowMount(BaseButton, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper).toMatchSnapshot();
  });
});
