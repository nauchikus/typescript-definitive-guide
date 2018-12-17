import { mapActions, mapGetters } from 'vuex';
import Vue, { ComponentOptions } from 'vue';

export interface IComponent extends Vue {}

const component: ComponentOptions<IComponent> = {
    name: 'CustomDialog',
    // components: {},
    props: {},
    data(this: any) {
        return {};
    },
    computed: {
        ...mapGetters([
            'bookContents',
            'isAppDrawerToggle',
            'isBookContentsToggleAll'
        ]),

        isBookContentsCollapseAll(this: any) {
            return this.isBookContentsToggleAll === true
                ? 'collapsed'
                : 'uncollapsed';
        },
        drawerState(this: any) {
            return this.isAppDrawerToggle ? 'open' : 'close';
        }
    },
    // mounted () {
    //
    // },
    updated() {
        console.log('update');
    },
    methods: {
        ...mapActions([
            'bookContentsToggleAll',
            'bookContentsToggleByLevelAndIndex'
        ]),

        toggle(this: any, level: number, index: number) {
            this.bookContentsToggleByLevelAndIndex({ level, index });
        },
        getIndex(level: number, index: number) {
            if (level === 0) {
                return `${index + 1}`;
            }

            return `${level + 1}.${index + 1}`;
        }
    }
};

export default component;
