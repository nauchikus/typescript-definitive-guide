import Vue, { ComponentOptions } from 'vue';

import AppBarComponents from '../shared/app-bar';
import SharedComponents from '../shared/shared';

import DrawerContentsPage from '../../components/drawer-contents-page/DraweContentsPage.vue';
import ContentContentsPage from '../../components/content-contents-page/ContentContentsPage.vue';
import Tree from '../../components/tree/Tree.vue';
import CustomCollapse from '../../components/custom-collapse/CustomCollapse.vue';
import BookContentsChapterInfo from '../../components/book-contents-chapter-info/BookContentsChapterInfo.vue';

import BookGrid from '../../views/book-grid/BookGrid.vue';
import NavAppDrawer from '../../views/nav-app-drawer/NavAppDrawer.vue';

import { mapActions, mapGetters } from 'vuex';
import { IComponent } from '@/pages/not-found/not-found-page';

const component: ComponentOptions<IComponent> = {
    name: 'contents',
    components: {
        ...SharedComponents,
        ...AppBarComponents,

        drawerContentsPage: Vue.component(
            'drawer-contents-page',
            DrawerContentsPage
        ),
        contentContentsPage: Vue.component(
            'content-contents-page',
            ContentContentsPage
        ),
        tree: Vue.component('tree', Tree),
        customCollapse: Vue.component('custom-collapse', CustomCollapse),
        bookContentsChapterInfo: Vue.component(
            'book-contents-chapter-info',
            BookContentsChapterInfo
        ),
        bookGrid: Vue.component('book-grid', BookGrid),
        navAppDrawer: Vue.component('nav-app-drawer', NavAppDrawer)
    },
    // props: [],
    data() {
        return {
            menuVisible: true
        };
    },
    computed: {
        ...mapGetters(['isAppDrawerToggle', 'isBookContentsLoad'])
    },
    beforeRouteLeave(this: any, to, from, next) {
        this.showGlobalProgressBar();

        next();
    },
    created(this: any) {
        if (this.isBookContentsLoad) {
            this.hideGlobalProgressBar();
        } else {
            this.bookContentsLoad();
        }
    },
    mounted(this: any) {},
    methods: {
        ...mapActions([
            'bookContentsLoad',
            'showMainDrawer',
            'hideMainDrawer',
            'toggleMainDrawer',
            'showGlobalProgressBar',
            'hideGlobalProgressBar'
        ])
    },
    watch: {
        isBookContentsLoad(this: any) {
            this.hideGlobalProgressBar();
        }
    }
};

export default component;
