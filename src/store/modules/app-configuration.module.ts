import { Module } from 'vuex';

interface ILocalState {
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
        telegram: {
            appChanelLink: 'https://t.me/nauchikus',
            authorLink: 'https://t.me/nauchikus'
        },
        donate: {
            yandex: {
                link:
                    'https://yasobe.ru/na/sbor_sredstv_na_razviteie_i_podderzhku_knigi_typescript_definitive_guide'
            }
        }
    },
    mutations: {},
    actions: {},
    getters: {
        appTelegramChanelLink: state => state.telegram.appChanelLink,
        yandexDonateLink: state => state.donate.yandex.link
    }
};
