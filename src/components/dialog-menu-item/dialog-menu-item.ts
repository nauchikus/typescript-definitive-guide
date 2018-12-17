export default {
    name: 'app',
    // components: {},
    props: ['title'],
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
