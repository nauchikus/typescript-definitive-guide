import { mapGetters } from 'vuex';
import ShareSocialService from '@/services/ShareSocialService';

export default {
    // components: {},
    // props: [],
    // data () {
    //     return {};
    // },
    computed: {
        ...mapGetters(['appTelegramChanelLink', 'yandexDonateLink'])
    },
    methods: {
        socialButton_click(this: any, socialType: string) {
            ShareSocialService.share(socialType);
        }
    }
};
