import * as path from 'path';

import {toPath} from '../../src/utils/string-utils';
import {RouterUtils} from '../../src/utils/router-utils';

import { GatsbyCreatePages } from "../types/gatsby-create-pages";
import { Locales } from "../types/locales";
import { CustomGatsbyNodeType } from '../gatsby-node-types';
import { AppLocalization } from "../../src/types/app-localizations";
import { IBookToc } from "../../src/types/IBookToc";
import { BookTocNode, TreeNode } from "../../src/stores/BookTocTreeStore";



interface IIndexCreatePageOptions {
    locale: Locales;
}

interface IAppLocalization {
    locale: Locales;
    localization: AppLocalization;
}
interface IBookTocGatsbyNode {
    locale: Locales;
    toc: IBookToc[];
}

export const createPages: GatsbyCreatePages<IIndexCreatePageOptions> = async ( helpers, options ) => {
    let { actions: { createPage }, getNodesByType } = helpers;
    let { locale } = options;


    let [{ localization }] = getNodesByType<IAppLocalization>( CustomGatsbyNodeType.AppLocalization )
      .filter( node => node.locale === locale );
    let [{ toc }] = getNodesByType<IBookTocGatsbyNode>( CustomGatsbyNodeType.BookToc )
        .filter( node => node.locale === locale );

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