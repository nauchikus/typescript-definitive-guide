import * as path from "path";
import * as fsp from "fs/promises";

import {generateIndex} from "../../www/utils/string-utils";
import {toId} from "../../www/utils/converter-path-utils";

const TOC_PATH = path.join(process.cwd(), `../book/ru/metadata/toc.json`);
const CHAPTER_DIR = path.join(process.cwd(), `../book/ru/chapters/`);

async function getBookToc() {
    const tocText = await fsp.readFile(path.resolve(TOC_PATH), `utf-8`);
    const toc = JSON.parse(tocText);

    return toc;
}


export interface ChapterInfo {
    section: string;
    title: string;
    level: number;
    filepath: string;
    imageDirname: string;
    index: string;
    contentIndex: string;
    contentFullIndex: string;
    elementId: string;
    children?: ChapterInfo[];
}

export interface BookToc {
    title: string;
    section: string;
    subtitles: string[];
}

function getChapterInfoAll(toc: BookToc[]): ChapterInfo[] {
    return toc.map(({title, section, subtitles}, nodeIndex, nodeSource) => {
        const dirname = `${generateIndex(nodeIndex, 3)}.(${section}) ${title}`;
        const imageDirname = path.join(CHAPTER_DIR, dirname, `images`);
        const filepath = path.join(CHAPTER_DIR, dirname, `content.md`);


        const numberLength = ( n: number ) => n.toString().length;

        const chapterInfo = {
            section,
            title,
            level: 0,
            filepath,
            imageDirname,
            index: nodeIndex.toString(),
            contentIndex: generateIndex(nodeIndex,numberLength(nodeSource.length)),
            contentFullIndex: generateIndex(nodeIndex,numberLength(nodeSource.length)),
            elementId: toId(title),
            children: subtitles.map((subtitle, leafIndex, leafSource) => ({
                section,
                title: subtitle,
                level: 1,
                filepath,
                imageDirname,
                index: `${nodeIndex}.${leafIndex}`,
                contentIndex: generateIndex(leafIndex, numberLength(leafSource.length)),
                contentFullIndex: `${generateIndex(nodeIndex,numberLength(nodeSource.length))}.${generateIndex(leafIndex, numberLength(leafSource.length))}`,
                elementId: toId(title + subtitle)
            }))
        }

        return chapterInfo as ChapterInfo;
    });
}

export interface ContentInfo {
    markdown: string;
    chapterInfo: ChapterInfo;
}
export async function getContentAll(chapterInfoAll: ChapterInfo[]){
    const contentInfoAll = await Promise.all(chapterInfoAll.map(async (chapterInfo): Promise<ContentInfo> => {
        const markdown = await fsp.readFile(chapterInfo.filepath, `utf-8`);

        return {
            markdown,
            chapterInfo
        };
    }));

    return contentInfoAll;
}

export interface TocData {
    title: string;
    index: string;
    level: number;
    elementId: string;
}

export function getTocDataAll(chapterInfoAll: ChapterInfo[]): TocData[] {
    const flatTree = <T extends {children?: T[]}>(tree: T): T[] => {
        return [tree, tree.children ? tree.children.map(flatTree).flat() : []].flat() as T[];
    };

    return chapterInfoAll
        .map(item => flatTree(item))
        .flat()
        .map(({index, title, elementId, level}) => ({
            index,
            title,
            elementId,
            level,
        }));
}

export interface BookData {
    toc: TocData[];
    chapterAll: ContentInfo[];

}
export async function createBookData(): Promise<BookData> {
    const bookToc = await getBookToc();
    const chapterInfoAll = getChapterInfoAll(bookToc);
    const chapterAll = await getContentAll(chapterInfoAll);
    const toc = getTocDataAll(chapterInfoAll);

    const data: BookData = {
        toc,
        chapterAll
    };

    return data;
}