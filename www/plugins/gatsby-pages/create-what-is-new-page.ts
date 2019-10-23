import * as path from 'path';

import {default as RouteUtils} from '../utils/route-utils';

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

    let version = '';

    createPage( {
        path: RouteUtils.whatIsNewRoutes.getWhatIsNewRoute( { version } ),
        component: path.resolve( __dirname, '../../src/page-templates/what-is-new-page/WhatIsNewPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};