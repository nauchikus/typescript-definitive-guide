import { Locales } from "../../plugins/types/locales";
import * as EnvUtils from "./env-utils";

interface ILocaleRouter {
    locale?: Locales|string;
}

interface IBookConcreteChapterRoute {
    chapterName:string;
}
interface IBookConcreteSubChapterRoute {
    subchapterName?:string;
}

interface IWhatIsNewInnovationRoute {
    version:string;
    innovation?:string;
}

const toRelativePath = (path: string) => `./${path}`;
const toAnchor = (path: string) => `#${path}`;

const clearPathFromGhPagesDomain = (path: string) => {
    let ghPagesPath = `/${EnvUtils.getGhPagesDomain()}`;


    if (path.startsWith(ghPagesPath)) {
        return path.substring(ghPagesPath.length);
    }

    return path;
}

const localeDecorate = (path:string, locale?:string) =>
    `${locale ? `/${locale}` : ``}${path}`;



const appRoutes = {
    getIndexRoute: ( { locale }:ILocaleRouter ) => localeDecorate(`/`, locale)
};

type BookGetRouteParams = ILocaleRouter & IBookConcreteChapterRoute & IBookConcreteSubChapterRoute;

const bookRoutes = {
    getBookRoute: ({locale, chapterName, subchapterName}: BookGetRouteParams) =>
        localeDecorate(`/book/chapters/${chapterName}${subchapterName ? `#${subchapterName}` : `` }`, locale),
    getBookTocRoute: ({locale}: ILocaleRouter) =>
        localeDecorate(`/book/chapters`, locale)
};
const whatIsNewRoutes = {
    getWhatIsNewTocRoute: (  ) =>
        `/what-is-new`,
    getWhatIsNewRoute: ( { version, innovation }: IWhatIsNewInnovationRoute ) =>
      innovation ?
        `/what-is-new/${ version }#${ innovation }` :
        `/what-is-new/${ version }`
};
const notFoundRoutes = {
    notFound: ({ locale }:ILocaleRouter ) =>
      `/404/`
};


export const RouterUtils = {
    appRoutes,
    bookRoutes,
    whatIsNewRoutes,
    notFoundRoutes,
    toRelativePath,
    toAnchor,
    clearPathFromGhPagesDomain,
};
