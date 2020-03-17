import * as path from 'path';


import {RouterUtils} from '../../src/utils/router-utils';
import * as StringUtils from '../../src/utils/string-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import {
    getSiteMetadataRequest, ICommitInfo,
    IGetSiteMetadataRequest
} from "./graphql-querys";
import { BookTocNode } from "../../src/stores/BookTocTreeStore";
import { toPath } from "../../src/utils/string-utils";
import { IBookTocSource, IBookTocWithContent } from "../../src/types/IBookToc";
import { IBookSourceTocGatsbyNode } from "./create-book-toc-page";
import { generateIndex } from "../../src/utils/string-utils";
import { GithubRepositoryInfoDataProvider } from "./data-providers/GithubRepositoryInfoDataProvider";
import { WinFileOnGithubHtmlContentDataProvider } from "./data-providers/WinFileOnGithubHtmlContentDataProvider";
import { WinFileOnGithubCommitHistoryDataProvider } from "./data-providers/WinFileOnGithubCommitHistoryDataProvider";
import { BookChapterFileOnGithubHtmlContentDataProvider } from "./data-providers/BookChapterFileOnGithubHtmlContentDataProvider";
import { BookChapterFileOnGithubCommitHistoryDataProvider } from "./data-providers/BookChapterFileOnGithubCommitHistoryDataProvider";
import { IWhatIsNewToc } from "../../src/types/IWhatIsNewToc";
import { Version } from "../../src/utils/Version";
import { CommitHistoryToCommitInfoTransformer } from "./transformers/CommitHistoryToCommitInfoTransformer";


interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}

export interface IBookTocWithContentNode extends BookTocNode, IBookTocWithContent {

}

export type CreateBookChapterNameParams={
    index:number;
    sectionName:string;
    chapterName:string;
}

const bookTocToPageNav = ( toc: IBookTocSource[] ) =>
  toc.map( ( { title, subtitles } ) => ( {
    name: title,
    path: StringUtils.toPath( title ),

    sections: subtitles
      .map( subtitle => ( {
        name: subtitle,
        path: StringUtils.toPath( subtitle )
      } ) )
  } ) );


// export const create

export const createBookChapterName = ( { index, sectionName, chapterName }: CreateBookChapterNameParams ) => (
  `${ generateIndex( index, 3 ) }.(${ sectionName }) ${ chapterName }`
);

interface ICreateBookChapterFileOnGithubPathParams {
    locale:string;
    chapterEscapedGithubName:string;
}

export interface IBookChapterPageContentData {
    title:string;
    section:string;
    path:string;
    subtitles:Array<{subtitle:string;path:string;}>
    html:string;
    commitInfoAll:ICommitInfo[];
    fileOnGithubLink:string;
}

const createEditBookChapterFileOnGithubLink = ( { locale, chapterEscapedGithubName }: ICreateBookChapterFileOnGithubPathParams ) => (
  `https://github.com/nauchikus/typescript-definitive-guide/blob/book/${locale}/${chapterEscapedGithubName}/content.md`
);

export const createPages: GatsbyCreatePages<IIndexCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale } = options;


    let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.locale === locale );
    let [{ toc }] = getNodesByType<IBookSourceTocGatsbyNode>( CustomGatsbyNodeType.BookTocSource )
      .filter( node => node.locale === locale );


    let githubRepositoryInfoDataProvider = new GithubRepositoryInfoDataProvider( graphql );
    let { repository } = await githubRepositoryInfoDataProvider.getData();


    let pageNavDataAll = bookTocToPageNav( toc );
    // let bookToc: IBookTocWithContentNode[] = toc.map( async (chapter,index) => {
    let bookChapterPageContentPromiseAll = toc.filter((item,index)=>index===0).map( async (chapter,index) => {
        let chapterEscapedName = StringUtils.escapeString( chapter.title );
        let chapterGithubName = createBookChapterName( {
            index,
            sectionName: chapter.section,
            chapterName: chapter.title
        } );
        let chapterEscapedGithubName = StringUtils.escapeString( chapterGithubName );




        let bookChapterFileOnGithubHtmlContentDataProvider = new BookChapterFileOnGithubHtmlContentDataProvider( graphql )
        let { html:chapterContentHtml } = await bookChapterFileOnGithubHtmlContentDataProvider.getData( {
            locale,
            chapterName:chapterGithubName,
            chapterEscapedGithubName,
        } );

        let bookChapterFileOnGithubCommitHistoryDataProvider = new BookChapterFileOnGithubCommitHistoryDataProvider( graphql )
        let { commitHistoryAll } = await bookChapterFileOnGithubCommitHistoryDataProvider.getData( {
            repository,
            locale,
            chapterName:chapterGithubName
        } );


        //000.(Общее) Что такое и для чего нужен TypeScript

        let commitHistoryToCommitInfoTransformer = new CommitHistoryToCommitInfoTransformer( graphql );
        let commitInfoAll = await commitHistoryToCommitInfoTransformer.transform( commitHistoryAll );

        let fileOnGithubLink = createEditBookChapterFileOnGithubLink( { locale, chapterEscapedGithubName } );


        let basePageContentData = {
            title: chapter.title,
            section: chapter.section,
            path: toPath( chapter.title ),
            subtitles: chapter.subtitles.map( subtitle => ( {
                subtitle: subtitle,
                path: `${ toPath( chapter.title ) }#${ toPath( subtitle ) }`
            } ) )
        };
        let pageContentData: IBookChapterPageContentData = {
            ...basePageContentData,
            html: chapterContentHtml,
            commitInfoAll,
            fileOnGithubLink
        };

        await createPage( {
            path: RouterUtils.bookRoutes.getBookRoute( { locale, chapterName:chapterEscapedName } ),
            component: path.resolve( __dirname, '../../src/page-templates/book-page/BookPageProvider.tsx' ),
            context: {
                locale,
                localization,
                pageContentData,
                pageNavDataAll

            }
        } );
    }  );


    /////////
    // let { actions: { createPage }, getNodesByType, graphql } = helpers;
    // let { locale } = options;
    //
    //
    // let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
    //   .filter( node => node.locale === locale );
    // let [{ toc: winToc }] = getNodesByType<IWhatIsNewTocGatsbyNode>( CustomGatsbyNodeType.BookTocSource );
    //
    // let winTocTree: TreeNode<IWhatIsNewToc>[] = winToc.map( ( node, index ) => ( {
    //     id: index.toString(),
    //     isCollapse: false,
    //     index,
    //     data: node
    // } ) );
    //
    //
    // let pageNavDataAll = winTocToPageNav( winToc );
    //
    // let winPagePromiseAll = winToc.map( async ( winTocItem ) => {
    //     let { innovations, ...innovationInfo } = winTocItem;
    //     let versionMMP = new Version( innovationInfo.releaseHistory[ 0 ].version ).mmp;
    //     let innovationVersionMMP = StringUtils.escapeString( versionMMP );
    //
    //
    //     let innovationDataPromiseAll = innovations.map( async ( innovation ) => {
    //         let innovationName = StringUtils.escapeString( innovation.innovationName );
    //         // let innovationContentHtmlGraphQlResponse = await graphql<IGetWinContentHtmlResponse, { regexp: string; }>(
    //         //   getWhatIsNewContentHtmlRequest(),
    //         //   { regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationName }/content\\.md/` }
    //         // );
    //
    //         let graphqlResponseAll = await Promise.all( [
    //             graphql<IGetWinContentHtmlResponse, { regexp: string; }>(
    //               getWhatIsNewContentHtmlRequest(),
    //               { regexp: `/.*/what-is-new/${ innovationVersionMMP }/${ innovationName }/content\\.md/` }
    //             ),
    //             graphql<IGetGithubCommitHistoryResponse, { path: string; }>(
    //               getGithubCommitHistoryQuery(),
    //               { path: createWinFileOnGithubPath( { versionMMP, innovationName: innovation.innovationName } ) }
    //             )
    //             // graphql<IGetGithubCommitHistoryResponse, { path: string; }>(
    //             //   getGithubCommitHistoryQuery(),
    //             //   { path: createWinFileOnGithubPath({versionMMP, innovationName:innovation.innovationName}) }
    //             // )
    //         ] );
    //
    //         let [
    //             innovationContentHtmlGraphQlResponse,
    //             githubCommitHistoryGraphQlResponse
    //
    //         ] = graphqlResponseAll;
    //
    //         // console.log(fileOnGithubHistoryInfoGraphQlResponse);
    //
    //         if ( innovationContentHtmlGraphQlResponse.errors ) {
    //             console.log( innovationContentHtmlGraphQlResponse.errors );
    //         }
    //
    //         if ( !innovationContentHtmlGraphQlResponse.data?.markdownRemark ) {
    //             throw new Error( `Innovation for version "${ versionMMP }" with name "${ innovation.innovationName }" not exists.` );
    //         }
    //
    //
    //         let innovationContentHtml = innovationContentHtmlGraphQlResponse.data?.markdownRemark.html;
    //
    //         let commitHistoryAll = githubCommitHistoryGraphQlResponse?.data?.github.repository.ref.target.history.commits;
    //         let uniqueCommitterMap = commitHistoryAll?.reduceRight( ( map, commitInfo ) => {
    //             return map.set( commitInfo.committer.name, commitInfo );
    //         }, new Map<string, ICommitHistory>() );
    //         let commitInfoAll = await Promise.all( Array.from( uniqueCommitterMap?.values() ?? [] ).map( async commitInfo => {
    //             let githubUserResponse = await graphql<IGetGithubUserResponse, { userName: string; }>(
    //               getGithubUserQuery(),
    //               { userName: commitInfo.committer.name }
    //             );
    //
    //             let committerData = githubUserResponse?.data?.github.search.edges[ 0 ].node;
    //
    //             if ( !committerData ) {
    //                 throw new Error( `Data about committer with name: "${ commitInfo.committer.name }" not found.` );
    //             }
    //
    //             let { committer, ...commitData } = commitInfo;
    //             let result = {
    //                 ...commitData,
    //                 committer: committerData
    //             };
    //
    //
    //             return result;
    //         } ) );
    //         let fileOnGithubLink = createEditeWinFileOnGithubLink( { versionMMP, innovationName } );
    //
    //
    //         let innovationData = {
    //             ...innovation,
    //             html: innovationContentHtml,
    //             commitInfoAll,
    //             fileOnGithubLink,
    //         };
    //
    //         return innovationData;
    //     } );
    //
    //
    //     let innovationDataAll = await Promise.all( innovationDataPromiseAll );
    //     let innovationData = {
    //         ...innovationInfo,
    //         innovations: innovationDataAll
    //     };
    //
    //
    //
    //     await createPage( {
    //         path: RouterUtils.whatIsNewRoutes.getWhatIsNewRoute( { version: versionMMP } ),
    //         component: path.resolve( __dirname, "../../src/page-templates/what-is-new-page/WhatIsNewPageProvider.tsx" ),
    //         context: {
    //             locale,
    //             localization,
    //             innovationData,
    //             winTocTree,
    //             pageNavDataAll,
    //         }
    //     } );
    // } );
    //
    // await Promise.all( winPagePromiseAll );
    /////////

    //


    // let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
    //     .filter( node => node.locale === locale );

    // let chapterName = 'first';


    return Promise.all( bookChapterPageContentPromiseAll );
};