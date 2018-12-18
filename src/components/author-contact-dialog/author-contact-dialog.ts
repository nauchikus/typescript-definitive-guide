import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'app',
    // components: {},
    // props: [],
    // data: ()=>({}),
    computed: {
        ...mapGetters([
            'isAuthorContactDialogToggle',
            'BASE_URL',
            'ORIGIN',
        ]),
        isDialogToggle: {
            get(this: any) {
                return this.isAuthorContactDialogToggle;
            },
            set(this: any, value: boolean) {
                this.hideDialog();
            }
        }
    },
    // watch:{},
    // mounted () {
    //
    // },
    methods: {
        ...mapActions(['hideAuthorContactDialog']),
        hideDialog(this: any) {
            this.hideAuthorContactDialog();
        }
    }
};
