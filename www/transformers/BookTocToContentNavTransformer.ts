import {IBookToc, IBookTocItem} from "../graphql-request-types";
import {ContentSectionIncrementalIdGenerator, Counter} from "../utils/string-utils";
import {toId, toUrl} from "../utils/converter-path-utils";
import {BookChapterContentNav} from "../models/BookChapterContentNav";

export class BookTocToContentNavTransformer {
    static readonly transform = (currentTocItem: IBookTocItem, bookToc: IBookToc): BookChapterContentNav => {
        const chapterIndex = bookToc.indexOf(currentTocItem);
        
        const counter = new Counter();

        const contentNavItem = {
            key: currentTocItem.title.toString(),
            level: 0,
            index: chapterIndex,
            contentIndex: counter.get(),
            section: currentTocItem.section,
            title: currentTocItem.title,
            path: toUrl(currentTocItem.title),
            elementId: toId(currentTocItem.title),
            children: currentTocItem.subtitles.map((title, subchapterIndex) => ({
                key: `${currentTocItem.title.toString()}_${subchapterIndex.toString()}`,
                index: subchapterIndex,
                contentIndex: counter.get(),
                level: 1,
                section: currentTocItem.section,
                title,
                path: toUrl(title),
                elementId: toId(title),
            }))
        } as BookChapterContentNav;

        return contentNavItem;
    }
}