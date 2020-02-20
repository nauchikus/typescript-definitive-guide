import * as path from 'path';

import * as StringUtils from "../../src/utils/string-utils";
import * as DateUtils from "../../src/utils/date-utils";
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IWhatIsNewTocGatsbyNode } from "./create-what-is-new-toc-page";
import {
    getWhatIsNewContentHtmlRequest,
    IGetWinContentHtmlResponse,
    getFileOnGithubHistoryInfoQuery,
    IGetFileOnGithubHistoryInfoResponse,
    IGetGithubCommitHistoryResponse,
    getGithubCommitHistoryQuery, ICommitHistory, IGetGithubUserResponse, getGithubUserQuery
} from "./graphql-querys";
import { TreeNode } from "../../src/stores/WhatIsNewTocTreeStore";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";
import { Version } from "../../src/utils/Version";

interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}



const winTocToPageNav = ( winToc: IWhatIsNewToc[] ) =>
  winToc.map( winTocItem => ( {
      name: new Version(winTocItem.releaseHistory[0].version).mmp,
      path: ``,

      sections: winTocItem.innovations
        .map( innovation => ( {
            name: innovation.innovationName,
            path: innovation.path,
            version: innovation.version
        } ) )

  } ) );


interface ICreateWinFileOnGithubPathParams {
    versionMMP:string;
    innovationName: string;
}
//Оператор опциональной последовательности (?.)
const createWinFileOnGithubPath = ( { versionMMP, innovationName }: ICreateWinFileOnGithubPathParams ) => (
  `what-is-new/${versionMMP}/${innovationName}/content.md`
);
const createEditeWinFileOnGithubLink = ( { versionMMP, innovationName }: ICreateWinFileOnGithubPathParams ) => (
  `https://github.com/nauchikus/typescript-definitive-guide/blob/what-is-new/${versionMMP}/${innovationName}/content.md`
);


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
        let versionMMP = new Version( innovationInfo.releaseHistory[ 0 ].version ).mmp;
        let innovationVersionMMP = StringUtils.escapeString( versionMMP );


        let innovationDataPromiseAll = innovations.map( async ( innovation ) => {
            let innovationName = StringUtils.escapeString( innovation.innovationName );
            // let innovationContentHtmlGraphQlResponse = await graphql<IGetWinContentHtmlResponse, { regexp: string; }>(
            //   getWhatIsNewContentHtmlRequest(),
            //   { regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationName }/content\\.md/` }
            // );

            let graphqlResponseAll = await Promise.all( [
                graphql<IGetWinContentHtmlResponse, { regexp: string; }>(
                  getWhatIsNewContentHtmlRequest(),
                  { regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationName }/content\\.md/` }
                ),
                graphql<IGetGithubCommitHistoryResponse, { path: string; }>(
                  getGithubCommitHistoryQuery(),
                  { path: createWinFileOnGithubPath( { versionMMP, innovationName: innovation.innovationName } ) }
                )
                // graphql<IGetGithubCommitHistoryResponse, { path: string; }>(
                //   getGithubCommitHistoryQuery(),
                //   { path: createWinFileOnGithubPath({versionMMP, innovationName:innovation.innovationName}) }
                // )
            ] );

            let [
                innovationContentHtmlGraphQlResponse,
                githubCommitHistoryGraphQlResponse

            ] = graphqlResponseAll;

            // console.log(fileOnGithubHistoryInfoGraphQlResponse);

            if ( innovationContentHtmlGraphQlResponse.errors ) {
                console.log( innovationContentHtmlGraphQlResponse.errors );
            }

            if ( !innovationContentHtmlGraphQlResponse.data?.markdownRemark ) {
                throw new Error( `Innovation for version "${ versionMMP }" with name "${ innovation.innovationName }" not exists.` );
            }


            let innovationContentHtml = innovationContentHtmlGraphQlResponse.data?.markdownRemark.html;

            let commitHistoryAll = githubCommitHistoryGraphQlResponse?.data?.github.repository.ref.target.history.commits;
            let uniqueCommitterMap = commitHistoryAll?.reduceRight( ( map, commitInfo ) => {
                return map.set( commitInfo.committer.name, commitInfo );
            }, new Map<string, ICommitHistory>() );
            let commitInfoAll = await Promise.all( Array.from( uniqueCommitterMap?.values() ?? [] ).map( async commitInfo => {
                let githubUserResponse = await graphql<IGetGithubUserResponse, { userName: string; }>(
                  getGithubUserQuery(),
                  { userName: commitInfo.committer.name }
                );

                let committerData = githubUserResponse?.data?.github.search.edges[ 0 ].node;

                if ( !committerData ) {
                    throw new Error( `Data about committer with name: "${ commitInfo.committer.name }" not found.` );
                }

                let { committer, ...commitData } = commitInfo;
                let result = {
                    ...commitData,
                    committer: committerData
                };


                return result;
            } ) );
            let fileOnGithubLink = createEditeWinFileOnGithubLink( { versionMMP, innovationName } );


            let innovationData = {
                ...innovation,
                html: innovationContentHtml,
                commitInfoAll,
                fileOnGithubLink,
            };

            return innovationData;
        } );


        let innovationDataAll = await Promise.all( innovationDataPromiseAll );
        let innovationData = {
            ...innovationInfo,
            innovations: innovationDataAll
        };



        await createPage( {
            path: RouterUtils.whatIsNewRoutes.getWhatIsNewRoute( { version: versionMMP } ),
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