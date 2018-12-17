import { mapGetters } from 'vuex';
import Vue, { ComponentOptions } from 'vue';

export interface IComponent extends Vue {}

const component: ComponentOptions<IComponent> = {
    name: 'CustomDialog',
    // components: {},
    props: {
        toggle: Boolean
    },
    // data(this: any) {
    //     return {
    //         isToggle: true,
    //     };
    // },
    computed: {
        ...mapGetters(['scrollPosition']),
        isToggle(this: any) {
            return this.toggle === true ? 'open' : 'close';
        }
    },
    watch: {
        scrollPosition(this: any, { x, y }: { x: number; y: number }) {
            let scrollElement = this.$refs.customDrawerContentRef.$el;
            scrollElement.scrollTo(x, y);
        }
    }
};

export default component;
