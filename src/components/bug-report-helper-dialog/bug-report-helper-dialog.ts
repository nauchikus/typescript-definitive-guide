import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        isMenuErrorActive: true,
        isSpellingErrorActive: false,
        isAppBugActive: false
    }),
    computed: {
        ...mapGetters(['isBugReportHelperDialogToggle']),
        isDialogToggle: {
            get(this: any) {
                return this.isBugReportHelperDialogToggle;
            },
            set(this: any, value: boolean) {
                this.hideDialog();
            }
        }
    },
    methods: {
        ...mapActions(['hideBugReportHelperDialog']),
        hideDialog(this: any) {
            this.hideBugReportHelperDialog();
        },
        goToMenuErrorStep(this: any) {
            this.isMenuErrorActive = true;

            setTimeout(() => {
                this.isSpellingErrorActive = false;
                this.isAppBugActive = false;
            }, 600);
        },
        goToSpellingErrorStep(this: any) {
            this.isMenuErrorActive = false;
            this.isSpellingErrorActive = true;
        },
        goToAppErrorStep(this: any) {
            this.isMenuErrorActive = false;
            this.isAppBugActive = true;
        },

        reset(this: any) {
            this.isMenuErrorActive = true;
            this.isSpellingErrorActive = false;
            this.isAppBugActive = false;
        }
    },
    watch: {
        isBugReportHelperDialogToggle(this: any, currentValue: boolean) {
            if (!currentValue) {
                this.reset();
            }
        }
    }
};
