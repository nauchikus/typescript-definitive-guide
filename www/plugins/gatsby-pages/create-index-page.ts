import * as path from 'path';

import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import {Langs, Locales} from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";



export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale, lang } = options;


    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.lang === lang );


    createPage( {
        path: RouterUtils.appRoutes.getIndexRoute( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/index-page/IndexPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};