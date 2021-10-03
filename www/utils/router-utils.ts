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


const localeDecorate = (path:string, locale?:string) =>
    `${locale ? `/${locale}` : ``}${path}`;



const appRoutes = {
    getIndexRoute: (  ) => `/`,
    getPdfRoute: ( ) => `/pdf`,
};

type BookGetRouteParams = IBookConcreteChapterRoute & IBookConcreteSubChapterRoute;

const bookRoutes = {
    getBookRoute: ({chapterName, subchapterName}: BookGetRouteParams) =>
        `/book/chapters/${chapterName}${subchapterName ? `#${subchapterName}` : `` }`,
    getBookTocRoute: () => `/book/chapters`
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
};
