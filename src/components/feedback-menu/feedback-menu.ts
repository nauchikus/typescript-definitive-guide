import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'app',
    // components: {},
    // props: [],
    // data () {
    //     return {};
    // },
    computed: {
        ...mapGetters([
            'BASE_URL',
            'ORIGIN',
        ])
    },
    // mounted () {
    //
    // },
    methods: {
        ...mapActions(['hideBugReportHelperDialog']),
        goToSpellingErrorStep(this: any) {
            this.$emit('goToSpellingError');
        },
        goToAppBugStep(this: any) {
            this.$emit('goToAppBug');
        }
    }
};
