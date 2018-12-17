import Vue, { ComponentOptions } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export interface IComponent extends Vue {}

const component: ComponentOptions<IComponent> = {
    name: 'not-found-placeholder',
    components: {},
    // props: [],
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['isEnterRoute', 'isNotFoundRoute'])
    },
    created(this: any) {},
    destroyed(this: any) {},

    methods: {
        ...mapActions([
            'deactivateEnterRouterFlag',
            'deactivateNotFoundRouterFlag'
        ]),
        home(this: any) {
            this.$router.push('/');
        },
        back(this: any) {
            this.$router.back();
        }
    }
};

export default component;
