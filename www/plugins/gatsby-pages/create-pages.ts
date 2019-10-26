import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";

import * as IndexPageCreator from './create-index-page';
import * as BookPageCreator from './create-book-page';
import * as BookTocPageCreator from './create-book-toc-page';
import * as WhatIsNewPageCreator from './create-what-is-new-page';
import * as WhatIsNewTocPageCreator from './create-what-is-new-toc-page';

interface ICreatePagesOptions {
    locale: Locales;
}

export const createPages: GatsbyCreatePages<ICreatePagesOptions> = async (...params) => {
    await IndexPageCreator.createPages( ...params );
    await BookPageCreator.createPages( ...params );
    // await BookTocPageCreator.createPages( ...params );
    // await WhatIsNewPageCreator.createPages( ...params );
    // await WhatIsNewTocPageCreator.createPages( ...params );
};