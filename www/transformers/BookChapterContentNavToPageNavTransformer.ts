import {BookChapterContentNav} from "../models/BookChapterContentNav";
import {IBookToc, IBookTocItem} from "../graphql-request-types";
import {toUrl} from "../utils/converter-path-utils";

export class BookChapterContentNavToPageNavTransformer {
    static readonly transform = (currentBookToc: IBookTocItem, bookToc: IBookToc) => {
        const DEFAULT_PAGE = {
            title: ``,
            path: ``
        };

        const currentItemIndex = bookToc.indexOf(currentBookToc);


        const isPrevPage = currentItemIndex >= 0;
        const isNextPage = currentItemIndex >= 0 && currentItemIndex < bookToc.length;



        type TocTreeItem = typeof bookToc[0];

        const getPage = (tocTreeItem: TocTreeItem) => {
            if (!tocTreeItem) {
                return DEFAULT_PAGE;
            }

            const {title} = tocTreeItem;
            const path = toUrl(title);

            return {title, path};
        };

        const pageNav = {
            isPrevPage,
            isNextPage,

            prevPage: getPage(bookToc[currentItemIndex - 1]),
            nextPage: getPage(bookToc[currentItemIndex + 1]),
        };


        return pageNav;
    }
}