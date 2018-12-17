import { mapGetters } from 'vuex';

export default {
    components: {},
    // props: [],
    data() {
        return {
            menuVisible: true
        };
    },
    computed: {
        ...mapGetters(['isAppDrawerToggle'])
    },
    // mounted () {
    //
    // },
    methods: {}
};
