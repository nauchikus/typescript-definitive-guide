import * as path from 'path';

import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";

interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}

export const createPages: GatsbyCreatePages<IIndexCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale } = options;


    let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.locale === locale );

    let chapterName = 'first';


    createPage( {
        path: RouterUtils.bookRoutes.getBookRoute( { locale, chapterName } ),
        component: path.resolve( __dirname, '../../src/page-templates/book-page/BookPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};