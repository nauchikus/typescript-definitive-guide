import { Module } from 'vuex';
import { copyToBuffer } from '@/utils/copy-to-buffer';
import Selection, { ISelection } from '@/directives/selected/selection.controller';

interface ILocalState {
    scroll: {
        scrollToElement: { elementId: string };
        scrollPosition: { x: number; y: number };
    };
    /// todo [refactoring] make separate module for chapter-page
    book: {
        selection: {
            isChapterTextSelected: boolean;
            selection: {
                text: string;
                position: { x: number; y: number };
            };
        };
        popups: {
            isReportAboutSyntaxErrorPopupShow: boolean;
        };
    };
    router: {
        isEnter: boolean;
        isNotFound: boolean;
    };
    isGlobalProgressBar: boolean;
    authorContactDialog: {
        isToggle: boolean;
    };
    bugReportHelperDialog: {
        isToggle: boolean;
    };
    drawer: {
        isToggle: boolean;
    };
}

export interface AppUiModuleAction {
    isAuthorContactDialogToggle(): void;

    isBugReportHelperDialogToggle(): void;

    isMainDrawerToggle(): void;
}

export const module: Module<ILocalState, {}> = {
    state: {
        /// todo [refactoring] make separate module for chapter-page
        book: {
            selection: {
                isChapterTextSelected: false,
                selection: {
                    text: '',
                    position: { x: 0, y: 0 }
                }
            },
            popups: {
                isReportAboutSyntaxErrorPopupShow: false
            }
        },
        scroll: {
            scrollToElement: { elementId: '' },
            scrollPosition: { x: 0, y: 0 }
        },
        router: {
            isEnter: true,
            isNotFound: false
        },
        isGlobalProgressBar: true,
        authorContactDialog: {
            isToggle: false
        },
        bugReportHelperDialog: {
            isToggle: false
        },
        drawer: {
            isToggle: false
        }
    },
    mutations: {
        toggleAuthorContactDialog: (state, isToggle: boolean) => {
            state.authorContactDialog.isToggle = isToggle;
        },

        toggleBugReportHelperDialog: (state, isToggle: boolean) => {
            state.bugReportHelperDialog.isToggle = isToggle;
        },

        toggleMainDrawer: (state, isToggle: boolean) => {
            state.drawer.isToggle = isToggle;
        },

        toggleGlobalProgressBar: (state, isToggle: boolean) => {
            state.isGlobalProgressBar = isToggle;
        },

        deactivateEnterRouterFlag: state => {
            state.router.isEnter = false;
        },
        toggleNotFoundRouterFlag: (state, isToggle: boolean) => {
            state.router.isNotFound = isToggle;
        },

        scrollBookContentBy(state, elementId: string) {
            state.scroll.scrollToElement = { elementId };
        },
        scrollBookContentTo(state, position: { x: number; y: number }) {
            state.scroll.scrollPosition = position;
        },

        /// todo [refactoring] make separate module for chapter-page
        selectionToggle(state, isToggle: boolean) {
            state.book.selection.isChapterTextSelected = isToggle;
        },
        setSelection(state, selection: ISelection) {
            state.book.selection.selection.text = selection.text;
            state.book.selection.selection.position = selection.position;
        },
        reportAboutSyntaxErrorPopupToggle(state, isToggle: boolean) {
            state.book.popups.isReportAboutSyntaxErrorPopupShow = isToggle;
        }
    },
    actions: {
        showAuthorContactDialog: ({ commit }) => {
            commit('toggleAuthorContactDialog', true);
        },
        hideAuthorContactDialog: ({ commit }) => {
            commit('toggleAuthorContactDialog', false);
        },
        showBugReportHelperDialog: ({ commit }) => {
            commit('toggleBugReportHelperDialog', true);
        },
        hideBugReportHelperDialog: ({ commit }) => {
            commit('toggleBugReportHelperDialog', false);
        },

        showMainDrawer: ({ commit }) => {
            commit('toggleMainDrawer', true);
        },
        hideMainDrawer: ({ commit }) => {
            commit('toggleMainDrawer', false);
        },
        toggleMainDrawer: ({ state, commit }) => {
            const toggle = !state.drawer.isToggle;

            commit('toggleMainDrawer', toggle);
        },

        copyToBuffer(context, text: string) {
            copyToBuffer(text);
        },

        showGlobalProgressBar: ({ state, commit }) => {
            commit('toggleGlobalProgressBar', true);
        },
        hideGlobalProgressBar: ({ state, commit }) => {
            commit('toggleGlobalProgressBar', false);
        },

        deactivateEnterRouterFlag: ({ state, commit }) => {
            commit('deactivateEnterRouterFlag');
        },
        activateNotFoundRouterFlag: ({ state, commit }) => {
            commit('toggleNotFoundRouterFlag', true);
        },
        deactivateNotFoundRouterFlag: ({ state, commit }) => {
            commit('toggleNotFoundRouterFlag', false);
        },

        scrollBookContentBy({ commit }, elementId: string = '') {
            commit('scrollBookContentBy', elementId);
        },
        scrollBookContentTo({ commit }, position: { x: number; y: number }) {
            commit('scrollBookContentTo', position);
        },

        /// todo [refactoring] make separate module for chapter-page
        bookChapterTextSelected({ commit }, { text, position }) {
            commit('selectionToggle', true);
            commit('setSelection', { text, position });
        },
        bookChapterTextUnselected({ commit }) {
            commit('selectionToggle', false);
            commit('setSelection', { text: '', position: { x: 0, y: 0 } });

            if (Selection.isSelection()) {
                // Selection.clearSelection();
            }
        },
        showReportAboutSyntaxErrorPopup({ commit }) {
            console.log('OPEN');
            commit('reportAboutSyntaxErrorPopupToggle', true);
        },
        hideReportAboutSyntaxErrorPopup({ commit }) {
            commit('reportAboutSyntaxErrorPopupToggle', false);
        }
    },
    getters: {
        isAuthorContactDialogToggle: state =>
            state.authorContactDialog.isToggle,
        isBugReportHelperDialogToggle: state =>
            state.bugReportHelperDialog.isToggle,
        isMainDrawerToggle: state => state.drawer.isToggle,
        isGlobalProgressBar: state => state.isGlobalProgressBar,
        isEnterRoute: state => state.router.isEnter,
        isNotFoundRoute: state => state.router.isNotFound,
        scrollToElementWithId: state => state.scroll.scrollToElement.elementId,
        scrollPosition: state => state.scroll.scrollPosition,

        /// todo [refactoring] make separate module for chapter-page
        isBookChapterTextSelected: state =>
            state.book.selection.isChapterTextSelected,
        bookChapterTextSelection: state => state.book.selection.selection,
        bookChapterTextSelectionText: state =>
            state.book.selection.selection.text,
        bookChapterTextSelectionPosition: state =>
            state.book.selection.selection.position,
        isReportAboutSyntaxErrorPopupShow: state =>
            state.book.popups.isReportAboutSyntaxErrorPopupShow
    }
};
