import Vue, { ComponentOptions } from 'vue';
import { mapActions } from 'vuex';

import NotFoundPlaceholder from '@/components/not-found-placeholder/NotFoundPlaceholder.vue';

export interface IComponent extends Vue {}

const component: ComponentOptions<IComponent> = {
    name: 'not-found',
    components: {
        notFoundPlaceholder: Vue.component(
            'not-found-placeholder',
            NotFoundPlaceholder
        )
    },
    // props: [],
    data() {
        return {};
    },
    beforeRouteLeave(this: any, to, from, next) {
        console.log('not-found leave ');
        this.showGlobalProgressBar();

        next();
    },

    mounted(this: any) {
        this.hideGlobalProgressBar();
    },
    methods: {
        ...mapActions(['showGlobalProgressBar', 'hideGlobalProgressBar'])
    }
};

export default component;
