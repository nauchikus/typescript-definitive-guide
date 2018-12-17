import { mapActions } from 'vuex';

function validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
    name: 'app',
    // components: {},
    // props: [],
    // data: () => ({
    //     input: '',
    // }),
    data() {
        return {
            email: '',
            message: '',

            isMessageInvalid: false,
            isEmailInvalid: false,

            isSubmitButtonDisabled: true,

            isAnimationSendingPromotionActive: false
        };
    },
    computed: {
        isMessageValid(this: any) {
            return {
                'md-invalid': this.isMessageInvalid
            };
        },
        isEmailValid(this: any) {
            return {
                'md-invalid': this.isEmailInvalid
            };
        },
        isSubmitButtonDisabledValid(this: any) {
            return !(this.isEmailValidate() && this.isMessageValidate());
        }
    },
    mounted(this: any) {
        setTimeout(() => this.$refs.emailInputRef.$el.focus(), 600);
    },
    methods: {
        ...mapActions(['sendAppBugReport', 'hideBugReportHelperDialog']),
        isEmailValidate(this: any) {
            if (this.email !== '' && !this.isEmailInvalid) {
                return true;
            }

            return false;
        },
        isMessageValidate(this: any) {
            if (this.message !== '' && !this.isMessageInvalid) {
                return true;
            }

            return false;
        },

        goToBackButtonClick(this: any) {
            this.$emit('goToBack');
        },
        email_blur(this: any) {
            if (this.email === '' && this.isEmailInvalid) {
                return (this.isEmailInvalid = false);
            }

            if (this.email === '') {
                return;
            }

            this.isEmailInvalid = !validateEmail(this.email);
        },
        message_blur(this: any) {
            if (this.message !== '' && this.message.trim() === '') {
                return (this.isMessageInvalid = true);
            }

            if (this.message === '' && this.isMessageInvalid) {
                return (this.isMessageInvalid = false);
            }
        },
        form_submit(this: any) {
            this.sendAppBugReport({
                email: this.email,
                message: this.message
            });

            this.isAnimationSendingPromotionActive = true;
        },
        animationSendingPromotion_done(this: any) {
            setTimeout(() => this.hideBugReportHelperDialog(), 1000);
        }
    }
};
