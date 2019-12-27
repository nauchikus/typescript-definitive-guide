import * as path from 'path';

import {RouteUtils} from '../../src/utils/route-utils';

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


    createPage( {
        path: RouteUtils.appRoutes.getIndexRoute( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/index-page/IndexPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};