import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper).toMatchSnapshot();
  });
});
