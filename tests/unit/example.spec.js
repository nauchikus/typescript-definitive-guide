import { shallowMount } from '@vue/test-utils';

describe('HelloWorld.vue', function () {
    it('renders props.msg when passed', function () {
        var msg = 'new message';
        var wrapper = shallowMount(HelloWorld, {
            propsData: { msg: msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
//# sourceMappingURL=example.spec.js.map