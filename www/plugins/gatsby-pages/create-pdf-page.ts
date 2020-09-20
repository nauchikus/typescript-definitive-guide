import * as path from 'path';

import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";
import { IWhatIsNewTocGatsbyNode } from "./create-what-is-new-toc-page";
import { Version } from '../../src/utils/Version';



export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale, lang } = options;


    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
        .filter( node => node.lang === lang );
    let [{ toc: winToc }] = getNodesByType<IWhatIsNewTocGatsbyNode>( CustomGatsbyNodeType.WhatIsNewToc );


    let lastWinToc = winToc[winToc.length - 1];
    let lastVersion = lastWinToc.releaseHistory[0];
    let versionInfo = new Version(lastVersion.version).toInfo();



    createPage( {
        path: RouterUtils.appRoutes.getPdfRoute( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/what-is-new-toc-page/WhatIsNewTocPageProvider.tsx' ),
        context: {
            locale,
            localization,
            versionInfo,
        }
    } );
};
