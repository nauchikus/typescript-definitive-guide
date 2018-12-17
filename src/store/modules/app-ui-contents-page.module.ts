import { Module } from 'vuex';

interface ILocalState {
    contents: {
        isItemCollapsed: boolean;
    };
}

export interface AppUiModuleAction {
    isAllContentsItemCollapsed(): void;
}

export const module: Module<ILocalState, {}> = {
    state: {
        contents: {
            isItemCollapsed: true
        }
    },
    mutations: {
        toggleCollapseContents: (state, isToggle: boolean) => {
            state.contents.isItemCollapsed = isToggle;
        }
    },
    actions: {},
    getters: {
        isAllContentsItemCollapsed: state => state.contents.isItemCollapsed
    }
};
