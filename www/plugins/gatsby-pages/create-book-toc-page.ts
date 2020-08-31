import * as path from 'path';

import {toPath} from '../../src/utils/string-utils';
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales, Langs } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IBookTocSource } from "../../src/types/IBookToc";
import { BookTocNode, TreeNode } from "../../src/stores/BookTocTreeStore";
import {IAppLocalizationGatsbyNode} from "../types/gatsby-node-types";
import {ICreatePageSharedOptions} from "../types/ICreatePageSharedOptions";



export interface IBookSourceTocGatsbyNode {
    locale: Locales;
    lang: Langs;
    toc: IBookTocSource[];
}

export const createPages: GatsbyCreatePages<ICreatePageSharedOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType, graphql } = helpers;
    let { locale, lang } = options;


    let [{ localization }] = getNodesByType<IAppLocalizationGatsbyNode>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.lang === lang );
    let [{ toc }] = getNodesByType<IBookSourceTocGatsbyNode>( CustomGatsbyNodeType.BookTocSource )
        .filter( node => node.lang === lang );

    let bookToc: BookTocNode[] = toc.map( chapter => ( {
        title: chapter.title,
        section: chapter.section,
        path: toPath( chapter.title ),
        subtitles: chapter.subtitles.map( subchapter => ( {
            subtitle: subchapter,
            path: `${toPath(chapter.title)}#${toPath(subchapter)}`
        } ) )
    } ) );
    let bookTocTree: TreeNode<BookTocNode>[] = bookToc.map( ( node, index ) => ( {
        id: index.toString(),
        isCollapse: false,
        index,
        data: node
    } ) );






    createPage( {
        path: RouterUtils.bookRoutes.getBookTocRoute( { locale } ),
        component: path.resolve( __dirname, '../../src/page-templates/book-toc-page/BookTocPageProvider.tsx' ),
        context: {
            locale,
            localization,
            bookTocTree,
        }
    } );
};