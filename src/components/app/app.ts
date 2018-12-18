import { mapGetters } from 'vuex';

import SharedComponents from '../../pages/shared/shared';
import AppBarComponents from '../../pages/shared/app-bar';
import TouchDetecter from '@/utils/TouchDetecter';

import AutoFocusDirective from '@/directives/auto-focus/auto-focus.directive';
import Vue from 'vue';

export default {
    name: 'app',
    components: {
        ...SharedComponents,
        ...AppBarComponents
    },
    directives: {
        autoFocus: Vue.directive( 'auto-focus', AutoFocusDirective )
    },
    // props: [],
    data () {
        return {
            isTouch: TouchDetecter.isTouch()
        };
    },
    computed: {
        ...mapGetters( [ 'isGlobalProgressBar', 'isNotFoundRoute' ] )
    }
    // mounted () {
    //
    // },
    // methods: {}
};
