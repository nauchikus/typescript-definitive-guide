import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";

import * as IndexPageCreator from './create-index-page';

interface ICreatePagesOptions {
    locale: Locales;
}

export const createPages: GatsbyCreatePages<ICreatePagesOptions> = async (...params) => {
    await IndexPageCreator.createPages( ...params );
};