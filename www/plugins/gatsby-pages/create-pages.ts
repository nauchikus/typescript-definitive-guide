import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales, Langs } from "../types/locales";

import * as IndexPageCreator from './create-index-page';
import * as BookPageCreator from './create-book-page';
import * as BookTocPageCreator from './create-book-toc-page';
import * as WhatIsNewPageCreator from './create-what-is-new-page';
import * as WhatIsNewTocPageCreator from './create-what-is-new-toc-page';
import * as PdfPageCreator from './create-pdf-page';
import * as NotFoundPageCreator from './create-not-found-page';
// import * as RedirectCreator from './create-redirects';

interface ICreatePagesOptions {
    locale: Locales;
    lang: Langs;
}

export const createPages: GatsbyCreatePages<ICreatePagesOptions> = async (...params) => {
    // await IndexPageCreator.createPages( ...params );
    //
    // await BookPageCreator.createPages( ...params );
    await BookTocPageCreator.createPages( ...params );

    // await WhatIsNewPageCreator.createPages( ...params );
    // await WhatIsNewTocPageCreator.createPages( ...params );
    //
    // await PdfPageCreator.createPages( ...params );
    //
    // await NotFoundPageCreator.createPages( ...params );
    // await RedirectCreator.createRedirects( ...params );
};
