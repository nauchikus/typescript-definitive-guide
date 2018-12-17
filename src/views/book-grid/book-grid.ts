import { mapGetters } from 'vuex';

export default {
    name: 'book-grid',
    components: {},
    // props: [],
    data() {
        return {
            menuVisible: true
        };
    },

    computed: {
        ...mapGetters(['isAppDrawerToggle'])
    }
};
