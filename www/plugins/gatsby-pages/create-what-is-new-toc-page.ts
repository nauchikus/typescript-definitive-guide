import * as path from 'path';

import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import {Langs, Locales} from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";
import { TreeNode } from "../../src/stores/WhatIsNewTocTreeStore";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";

export interface IWhatIsNewTocGatsbyNode {
    toc:IWhatIsNewToc[];
}

export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale, lang } = options;


    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.lang === lang );
    let [{ toc: winToc }] = getNodesByType<IWhatIsNewTocGatsbyNode>( CustomGatsbyNodeType.WhatIsNewToc );

    let winTocTree: TreeNode<IWhatIsNewToc>[] = winToc.map( ( node, index ) => ( {
        id: index.toString(),
        isCollapse: false,
        index,
        data: node
    } ) );


    createPage( {
        path: RouterUtils.whatIsNewRoutes.getWhatIsNewTocRoute(  ),
        component: path.resolve( __dirname, '../../src/page-templates/what-is-new-toc-page/WhatIsNewTocPageProvider.tsx' ),
        context: {
            locale,
            localization,
            winTocTree,
        }
    } );
};