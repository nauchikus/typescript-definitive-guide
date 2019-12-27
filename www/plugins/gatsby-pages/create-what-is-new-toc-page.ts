import * as path from 'path';

import {RouteUtils} from '../../src/utils/route-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";
import { TreeNode } from "../../src/stores/WhatIsNewTocTreeStore";

interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}

export interface IWhatIsNewTocGatsbyNode {
    toc:IWhatIsNewToc[];
}

export const createPages: GatsbyCreatePages<IIndexCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale } = options;


    let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.locale === locale );
    let [{ toc: winToc }] = getNodesByType<IWhatIsNewTocGatsbyNode>( CustomGatsbyNodeType.WhatIsNewToc );

    let winTocTree: TreeNode<IWhatIsNewToc>[] = winToc.map( ( node, index ) => ( {
        id: index.toString(),
        isCollapse: false,
        index,
        data: node
    } ) );


    createPage( {
        path: RouteUtils.whatIsNewRoutes.getWhatIsNewTocRoute(  ),
        component: path.resolve( __dirname, '../../src/page-templates/what-is-new-toc-page/WhatIsNewTocPageProvider.tsx' ),
        context: {
            locale,
            localization,
            winTocTree,
        }
    } );
};