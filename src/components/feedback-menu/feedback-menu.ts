import { mapActions } from 'vuex';

export default {
    name: 'app',
    // components: {},
    // props: [],
    // data () {
    //     return {};
    // },
    // computed: {},
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
