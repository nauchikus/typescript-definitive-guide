import { Locales } from "../../plugins/types/locales";

interface ILocaleRouter {
    locale: Locales|string;
}

interface IBookConcreteChapterRoute {
    chapterName:string;
}

interface IWhatIsNewInnovationRoute {
    version:string;
    innovation?:string;
}

const appRoutes = {
    getIndexRoute: ( { locale }:ILocaleRouter ) => `/${ locale }`
};
const bookRoutes = {
    getBookRoute: ( { locale, chapterName }: ILocaleRouter & IBookConcreteChapterRoute ) =>
        `/${ locale }/book/chapters/${ chapterName }`,
    getBookTocRoute: ( { locale }: ILocaleRouter ) =>
        `/${ locale }/book/chapters`
};
const whatIsNewRoutes = {
    getWhatIsNewTocRoute: (  ) =>
        `/ru/what-is-new`,
    getWhatIsNewRoute: ( { version, innovation }: IWhatIsNewInnovationRoute ) =>
      innovation ?
        `/ru/what-is-new/${ version }#${ innovation }` :
        `/ru/what-is-new/${ version }`
};


export const RouterUtils = {
    appRoutes,
    bookRoutes,
    whatIsNewRoutes
};