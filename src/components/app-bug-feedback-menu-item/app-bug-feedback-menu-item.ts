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
        goToBackButtonClick(this: any) {
            this.$emit('goToBack');
        }
    }
};
