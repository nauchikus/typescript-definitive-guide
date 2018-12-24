import Vue from 'vue';
import Router from 'vue-router';
import { Store } from 'vuex';

Vue.use(Router);

export const create = (store: Store<{}>) => {
    let shared = {
        // beforeRouteLeave(to, from, next){
        //
        // }
    };
    let router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/', // })

                name: 'home',
                component: () =>
                    import(/* webpackChunkName: "hode" */ './pages/home/HomePage.vue')
            },
            {
                path: '/book/contents',
                name: 'contents',
                component: () =>
                    import(/* webpackChunkName: "contents" */ './pages/contents/ContentsPage.vue')
            },
            {
                path: '/book/contents/:chapter/:subchapter?',
                name: 'chapter',
                component: () =>
                    import(/* webpackChunkName: "chapter" */ './pages/chapter/ChapterPage.vue'),
                beforeEnter: async (to, from, next) => {
                    let isEnterToApp = from.name === null;

                    if (isEnterToApp) {
                        await store.dispatch('bookContentsLoad');

                        let { chapter, subchapter } = to.params;
                        let isRouteExist = store.getters.isChapterExist(
                            chapter,
                            subchapter
                        );

                        if (!isRouteExist) {
                            store.dispatch('activateNotFoundRouterFlag');
                        }
                    }

                    next();
                }
            },
            {
                path: '*',
                name: 'not-found',
                component: () =>
                    import(/* webpackChunkName: "not-found" */ './pages/not-found/NotFoundPage.vue')
            }
        ]
    });

    return router;
};
