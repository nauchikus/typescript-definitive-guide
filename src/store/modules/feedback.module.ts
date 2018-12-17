import { Module } from 'vuex';

interface ILocalState {}

export interface AppUiModuleAction {
    sendAppBugReport(): void;
}

export const module: Module<ILocalState, {}> = {
    state: {},
    mutations: {},
    actions: {
        sendAppBugReport: ({}, data) => {
            /// TODO implementation send to email logic (bad idea doing it here).
        }
    },
    getters: {}
};
