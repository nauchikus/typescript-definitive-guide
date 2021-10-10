import {BookChapterContentNav} from "../models/BookChapterContentNav";

export type ChapterSectionInfo = {
    key: string;
    elementId: string;
    markdown: string;
}
export class BookContentSectionInfoTransformer {
    static transform = (markdownAll: string[], contentNav: BookChapterContentNav): ChapterSectionInfo[] => {
        const flatTree = <T>(tree: T): T[] => {
            return [tree, tree.children ? tree.children.map(flatTree).flat() : []].flat()
        };

        const flatContentNav = flatTree(contentNav);
        const sectionInfo = flatContentNav.reduce((result, {key, elementId}, index) => {
            result.push({
                key,
                elementId,
                markdown: markdownAll[index]
            });

            return result;
        }, []);


        return sectionInfo;
    }
}