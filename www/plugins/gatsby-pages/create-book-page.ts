import * as path from 'path';


import {RouterUtils} from '../../src/utils/router-utils';
import * as ConverterPathUtils from '../../src/utils/converter-path-utils';
import * as StringUtils from '../../src/utils/string-utils';
import * as EnvUtils from '../../src/utils/env-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import {ICommitInfo, } from "./graphql-querys";
import { BookTocNode } from "../../src/stores/BookTocTreeStore";
import { toPath } from "../../src/utils/string-utils";
import { IBookTocSource, IBookTocWithContent } from "../../src/types/IBookToc";
import { IBookSourceTocGatsbyNode } from "./create-book-toc-page";
import { generateIndex } from "../../src/utils/string-utils";
import { GithubRepositoryInfoDataProvider } from "./data-providers/GithubRepositoryInfoDataProvider";
import { BookChapterFileOnGithubHtmlContentDataProvider } from "./data-providers/BookChapterFileOnGithubHtmlContentDataProvider";
import { BookChapterFileOnGithubCommitHistoryDataProvider } from "./data-providers/BookChapterFileOnGithubCommitHistoryDataProvider";
import { CommitHistoryToCommitInfoTransformer } from "./transformers/CommitHistoryToCommitInfoTransformer";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";



export interface IBookTocWithContentNode extends BookTocNode, IBookTocWithContent {

}

export type CreateBookChapterNameParams={
    index:number;
    sectionName:string;
    chapterName:string;
}

const bookTocToPageNav = ( toc: IBookTocSource[] ) => toc.map( ( { title, subtitles } ) => ( {
    name: title,
    path: title,

    sections: subtitles
      .map( subtitle => ( {
        name: subtitle,
        path: subtitle
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
  `https://github.com/${EnvUtils.getRepositoryOwner()}/${EnvUtils.getRepositoryName()}/blob/book/${locale}/${chapterEscapedGithubName}/content.md`
);

export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
  let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale, lang } = options;


    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.lang === lang );
    let [{ toc }] = getNodesByType<IBookSourceTocGatsbyNode>( CustomGatsbyNodeType.BookTocSource )
      .filter( node => node.lang === lang );


    let githubRepositoryInfoDataProvider = new GithubRepositoryInfoDataProvider( graphql );
    let { repository } = await githubRepositoryInfoDataProvider.getData();

    let pageNavDataAll = bookTocToPageNav( toc );
    // let bookToc: IBookTocWithContentNode[] = toc.map( async (chapter,index) => {
    let bookChapterPageContentPromiseAll = toc.filter((item,index)=>true).map( async (chapter,index) => {
        let chapterEscapedName = StringUtils.escapeString( chapter.title );
        let chapterEscapedPath = chapter.title;
        let chapterGithubName = createBookChapterName( {
            index,
            sectionName: chapter.section,
            chapterName: chapter.title
        } );
        let chapterEscapedGithubName = StringUtils.escapeString( chapterGithubName );


        let bookChapterFileOnGithubHtmlContentDataProvider = new BookChapterFileOnGithubHtmlContentDataProvider( graphql )
        let { html:chapterContentHtml } = await bookChapterFileOnGithubHtmlContentDataProvider.getData( {
            lang,
            chapterName:chapterGithubName,
            chapterEscapedGithubName,
        } );

        let bookChapterFileOnGithubCommitHistoryDataProvider = new BookChapterFileOnGithubCommitHistoryDataProvider( graphql )
        let { commitHistoryAll } = await bookChapterFileOnGithubCommitHistoryDataProvider.getData( {
            repository,
            lang,
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
            path: RouterUtils.bookRoutes.getBookRoute( { locale, chapterName:chapterEscapedPath } ),
            component: path.resolve( __dirname, '../../src/page-templates/book-page/BookPageProvider.tsx' ),
            context: {
                locale,
                localization,
                pageContentData,
                pageNavDataAll

            }
        } );
    }  );



    return Promise.all( bookChapterPageContentPromiseAll );
};
