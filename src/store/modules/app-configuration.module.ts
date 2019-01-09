import { Module } from 'vuex';

interface ILocalState {
    BASE_URL: string;
    ORIGIN: string;
    telegram: {
        appChanelLink: string;
        authorLink: string;
    };
    donate: {
        yandex: {
            link: string;
        };
    };
}

export interface AppUiModuleAction {}

export const module: Module<ILocalState, {}> = {
    state: {
        BASE_URL: process.env.BASE_URL,
        ORIGIN: process.env.VUE_APP_ORIGIN,
        telegram: {
            appChanelLink: 'https://t.me/nauchikus',
            authorLink: 'https://t.me/nauchikus'
        },
        donate: {
            yandex: {
                link:
                    'https://yasobe.ru/na/typescript_definitive_guide'
            }
        }
    },
    mutations: {},
    actions: {},
    getters: {
        appTelegramChanelLink: state => state.telegram.appChanelLink,
        yandexDonateLink: state => state.donate.yandex.link,
        BASE_URL: state => state.BASE_URL,
        ORIGIN: state => state.ORIGIN
    }
};
