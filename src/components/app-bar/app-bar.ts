import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'app-bar',
    template: '#app-bar',
    // components: {},
    // props: [],
    // data () {
    //     return {};
    // },
    computed: {
        ...mapGetters(['appTelegramChanelLink', 'yandexDonateLink'])
    },
    // mounted () {
    //
    // },
    methods: {
        ...mapActions([
            'showAuthorContactDialog',
            'hideAuthorContactDialog',

            'showBugReportHelperDialog',
            'hideBugReportHelperDialog'
        ])
    }
};
