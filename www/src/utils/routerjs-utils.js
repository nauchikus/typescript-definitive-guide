const toRelativePath = (path) => `./${path}`;
const toAnchor = (path) => `#${path}`;


const localeDecorate = (path, locale) =>
    `${locale ? `/${locale}` : ``}${path}`;

const toFullRoute = route => `${process.env.GATSBY_APP_ORIGINAL}${route}`;
const appRoutes = {
    getIndexRoute: ( { locale } ) => localeDecorate(`/`, locale)
};


const bookRoutes = {
    getBookRoute: ({locale, chapterName, subchapterName}) =>
        localeDecorate(`/book/chapters/${chapterName}${subchapterName ? `#${subchapterName}` : `` }`, locale),
    getBookTocRoute: ({locale}) =>
        localeDecorate(`/book/chapters`, locale)
};
const whatIsNewRoutes = {
    getWhatIsNewTocRoute: (  ) =>
        `/what-is-new`,
    getWhatIsNewRoute: ( { version, innovation } ) =>
      innovation ?
        `/what-is-new/${ version }#${ innovation }` :
        `/what-is-new/${ version }`
};
const notFoundRoutes = {
    notFound: ({ locale } ) =>
      `/404/`
};


module.exports = {
    appRoutes,
    bookRoutes,
    whatIsNewRoutes,
    notFoundRoutes,
    toRelativePath,
    toAnchor,
    toFullRoute,
};
