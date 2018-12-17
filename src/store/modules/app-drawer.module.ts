import { Module } from 'vuex';

interface ILocalState {
    isToggle: boolean;
}

export interface AppUiModuleAction {
    isAppDrawerToggle(): void;
}

const isInitToggle = () => {
    if (
        window &&
        document.documentElement &&
        document.documentElement.clientWidth >= 1078
    ) {
        return true;
    }

    return false;
};

export const module: Module<ILocalState, {}> = {
    state: {
        isToggle: isInitToggle()
    },
    mutations: {
        toggleAppDrawer: (state, isToggle: boolean) => {
            state.isToggle = isToggle;
        }
    },
    actions: {
        openAppDrawer: ({ commit }) => {
            commit('toggleAppDrawer', true);
        },
        closeAppDrawer: ({ commit }) => {
            commit('toggleAppDrawer', false);
        },
        toggleAppDrawer: ({ state, commit }) => {
            const toggle = !state.isToggle;

            commit('toggleAppDrawer', toggle);
        }
    },
    getters: {
        isAppDrawerToggle: state => state.isToggle
    }
};
