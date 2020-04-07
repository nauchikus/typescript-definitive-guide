import * as path from 'path';

import {toPath} from '../../src/utils/string-utils';
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IBookTocSource } from "../../src/types/IBookToc";
import { BookTocNode, TreeNode } from "../../src/stores/BookTocTreeStore";



interface INotFoundCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}

export const createPages: GatsbyCreatePages<INotFoundCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale } = options;

    let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.locale === locale );


    createPage( {
        path: RouterUtils.notFoundRoutes.notFound( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/not-found-page/NotFoundPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};