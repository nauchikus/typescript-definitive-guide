import * as path from 'path';

import {RouteUtils} from '../../src/utils/route-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import * as StringUtils from "../../src/utils/string-utils";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IWhatIsNewTocGatsbyNode } from "./create-what-is-new-toc-page";
import {
    getWhatIsNewContentHtmlRequest, IGetWinContentHtmlResponse
} from "./graphql-querys";
import { TreeNode } from "../../src/stores/WhatIsNewTocTreeStore";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";

interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}

const hasPrev = ( index: number, length: number ) => index > 0;
const hasNext = ( index: number, length: number ) => index < length - 1;

const winTocToPageNav = ( winToc: IWhatIsNewToc[] ) =>
  winToc.map( winTocItem => ( {
      name: winTocItem.versionMMP,
      path: ``,

      sections: winTocItem.innovations.map( innovation => ( {
          name: innovation.innovationName,
          path: innovation.path
      } ) )
  } ) );


export const createPages: GatsbyCreatePages<IIndexCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
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

    let pageNavDataAll = winTocToPageNav( winToc );

    let winPagePromiseAll = winToc.map( async ( winTocItem ) => {
        let { innovations, ...innovationInfo } = winTocItem;
        let { versionMMP } = innovationInfo;
        let innovationVersionMMP = StringUtils.escapeString( versionMMP );


        let innovationDataPromiseAll = innovations.map( async ( innovation ) => {
            let innovationName = StringUtils.escapeString( innovation.innovationName );
            let innovationContentHtmlGraphQlResponse = await graphql<IGetWinContentHtmlResponse, { regexp: string; }>(
              getWhatIsNewContentHtmlRequest(),
              { regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationName }/content\\.md/` }
            );


            if ( !innovationContentHtmlGraphQlResponse.data?.markdownRemark ) {
                throw new Error( `Innovation for version "${ versionMMP }" with name "${ innovation.innovationName }" not exists.` );
            }


            let innovationContentHtml = innovationContentHtmlGraphQlResponse.data?.markdownRemark.html;


            let innovationData = {
                ...innovation,
                html: innovationContentHtml
            };

            return innovationData;
        } );


        let innovationDataAll = await Promise.all( innovationDataPromiseAll );
        let innovationData = {
            ...innovationInfo,
            innovations: innovationDataAll
        };



        await createPage( {
            path: RouteUtils.whatIsNewRoutes.getWhatIsNewRoute( { version: versionMMP } ),
            component: path.resolve( __dirname, "../../src/page-templates/what-is-new-page/WhatIsNewPageProvider.tsx" ),
            context: {
                locale,
                localization,
                innovationData,
                winTocTree,
                pageNavDataAll,
            }
        } );
    } );

    await Promise.all( winPagePromiseAll );
};