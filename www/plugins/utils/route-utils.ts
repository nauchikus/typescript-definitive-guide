import { Locales } from "../types/locales";

interface ILocaleRouter {
    locale: Locales;
}

interface IBookConcreteChapterRoute {
    chapterName:string;
}

interface IWhatIsNewInnovationRoute {
    version:string;
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
    getWhatIsNewRoute: ( { version }: IWhatIsNewInnovationRoute ) =>
        `/ru/what-is-new/${ version }`
};

export default {
    appRoutes,
    bookRoutes,
    whatIsNewRoutes,
}