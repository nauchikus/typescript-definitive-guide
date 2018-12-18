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
        ...mapGetters([
            'isAppDrawerToggle',
            'BASE_URL',
            'ORIGIN',
        ]),
    },
    methods: {
        readButton_click(this: any) {
            this.$router.push('/book/contents');
        }
    }
};
