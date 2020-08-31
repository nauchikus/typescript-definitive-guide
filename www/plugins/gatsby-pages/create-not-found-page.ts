import * as path from 'path';

import {toPath} from '../../src/utils/string-utils';
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import {Langs, Locales} from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IBookTocSource } from "../../src/types/IBookToc";
import { BookTocNode, TreeNode } from "../../src/stores/BookTocTreeStore";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";


export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale, lang } = options;

    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.lang === lang );


    createPage( {
        path: RouterUtils.notFoundRoutes.notFound( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/not-found-page/NotFoundPageProvider.tsx' ),
        context: {
            locale,
            localization,
        }
    } );
};