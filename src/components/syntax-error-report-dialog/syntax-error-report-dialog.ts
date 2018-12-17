import { mapActions, mapGetters } from 'vuex';
import { SelectionExcludes } from '@/enums/SelectionExcludes';

export default {
    data(this: any) {
        return {
            SelectionExcludes,

            isMenuErrorActive: true,
            isSpellingErrorActive: false,
            isAppBugActive: false,
            textWithFixSyntaxError: '',
            isSubmitReportAboutSyntaxErrorButtonDisabled: true,
            isAnimationSendingPromotionActive: false,

            isMessageInvalid: false
        };
    },
    computed: {
        ...mapGetters([
            'isReportAboutSyntaxErrorPopupShow',
            'bookChapterTextSelectionText',
            'bookChapterTextSelection'
        ]),
        isDialogToggle: {
            get(this: any) {
                return this.isReportAboutSyntaxErrorPopupShow;
            },
            set(this: any, value: boolean) {
                this.hideDialog();
            }
        },
        textWithSyntaxError: {
            get(this: any) {
                return this.bookChapterTextSelectionText;
            },
            set(this: any, value: boolean) {}
        },
        isMessageValid(this: any) {
            return {
                'md-invalid': this.isMessageInvalid
            };
        }
    },
    methods: {
        ...mapActions([
            'hideReportAboutSyntaxErrorPopup',
            'bookChapterTextUnselected'
        ]),
        hideDialog(this: any) {
            this.hideReportAboutSyntaxErrorPopup();
            this.bookChapterTextUnselected();
        },
        isMessageValidate(this: any) {
            if (this.message !== '' && !this.isMessageInvalid) {
                return true;
            }

            return false;
        },
        reportAboutSyntaxErrorForm_submitHandler(this: any) {
            this.startDoneAnimation();
        },
        animationSendingPromotion_done(this: any) {
            setTimeout(() => {
                this.isAnimationSendingPromotionActive = false;
                this.isDialogToggle = false;
            }, 1000);
        },
        startDoneAnimation(this: any) {
            setTimeout(
                () => (this.isAnimationSendingPromotionActive = true),
                1000
            );
        }
    },
    watch: {
        textWithFixSyntaxError(this: any, currentValue: string) {
            if (currentValue !== '') {
                this.isSubmitReportAboutSyntaxErrorButtonDisabled = false;
            } else if (!this.isSubmitReportAboutSyntaxErrorButtonDisabled) {
                this.isSubmitReportAboutSyntaxErrorButtonDisabled = true;
            }
        },
        isDialogToggle(this: any, currentState: boolean) {
            if (!currentState) {
                this.textWithFixSyntaxError = '';
                this.isAnimationSendingPromotionActive = false;
            }
        }
    }
};
