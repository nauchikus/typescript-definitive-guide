import AppBarComponents from '../shared/app-bar';
import { mapActions } from 'vuex';
import Vue, { ComponentOptions } from 'vue';
import { IComponent } from '@/pages/not-found/not-found-page';

import HomeGrid from '../../views/home-grid/HomeGrid.vue';
import ShareSocialBar from '../../components/share-social-bar/ShareSocialBar.vue';

const component: ComponentOptions<IComponent> = {
    name: 'home',
    components: {
        ...AppBarComponents,

        homeGrid: Vue.component('home-grid', HomeGrid),
        shareSocialBar: Vue.component('share-social-bar', ShareSocialBar)
    },
    // props: [],
    // data () {
    //     return {};
    // },
    beforeRouteEnter(t, f, n) {
        console.log('home enter');
        n();
    },
    beforeRouteLeave(this: any, to, from, next) {
        this.showGlobalProgressBar();

        next();
    },

    mounted(this: any) {
        this.hideGlobalProgressBar();
    },
    computed: {},
    methods: {
        ...mapActions(['showGlobalProgressBar', 'hideGlobalProgressBar'])
    }
};

export default component;
