import { Module } from 'vuex';
import { BookLoader } from '@/facade';

/// TODO think about going back to Leaf type
interface ILeaf {}

interface INode<T> {
    children?: (INode<T> & T)[];
}

interface ITreeUINode<Data> extends INode<ITreeUINode<Data>> {
    key: string;
    index: number;
    level: number;
    isCollapsed: boolean;
    isNode: boolean;

    data: Data;
}

export enum BookContentsNodes {
    Chapter = 'chapter',
    SubChapter = 'subchapter'
}

interface IBookSubchapter {
    type: BookContentsNodes.SubChapter;
    name: string;
    path: string;
    anchor: string;
}

interface IBookChapter extends INode<IBookSubchapter> {
    type: BookContentsNodes.Chapter;
    name: string;
    path: string;
}

export interface IBookContentsNode extends ITreeUINode<BookContentsDataNode> {}

type BookContentsDataNode = IBookChapter | IBookSubchapter;

interface ILocalState {
    contents: IBookContentsNode[];
    isBookContentsToggleAll: boolean;

    currentSubChapterAll: ITreeUINode<IBookSubchapter>[];

    currentChapterName: string | null;

    currentChapterContent: string;

    currentChapterPath: string | null;
    nextChapterPath: string | null;
    prevChapterPath: string | null;
    chapterIndex: number;
    chapterTotalIndex: number;

    isCurrentChapterContentLoaded: boolean;

    isNextChapter: boolean;
    isPrevChapter: boolean;
}

export interface BookContentsAction {
    toggle(key: string): void;
}

const findNode = <T extends INode<T>>(
    level: number,
    index: number,
    nodes: T[]
): T =>
    level && nodes[level].children !== undefined
        ? findNode(level - 1, index, nodes[level].children as T[])
        : nodes[index];

const collapseAll = (nodes: IBookContentsNode[], isCollapsed: boolean) =>
    nodes.forEach(node => {
        node.isCollapsed = isCollapsed;

        if (node.children !== undefined) {
            collapseAll(node.children, isCollapsed);
        }
    });

const treeError = (level: number, index: number) =>
    new Error(
        `level "${level}" or index "${index}" does not exist in contents.`
    );

const dataToTree = <Data>(
    d: Array<INode<Data> & Data>,
    level: number = 0
): Array<ITreeUINode<Data>> => {
    const isChildren = (node: INode<Data> & Data): node is INode<Data> & Data =>
        node.children !== undefined && node.children.length > 0;

    interface LeafFactory<Data> {
        data: Data;
        key: string;
        index: number;
        level: number;
        isCollapsed: boolean;
        isNode: boolean;
    }

    interface NodeChildren<Data> {
        children: Array<ITreeUINode<Data>>;
    }

    type NodeFactory<Data> = LeafFactory<Data> & NodeChildren<Data>;

    const createNode = <Data>({
        data,
        children,
        key,
        index,
        level,
        isCollapsed,
        isNode
    }: NodeFactory<Data>): ITreeUINode<Data> => ({
        ...createLeaf({ data, key, index, level, isCollapsed, isNode }),
        children
    });
    const createLeaf = <Data>({
        data,
        key,
        index,
        level,
        isCollapsed,
        isNode
    }: LeafFactory<Data>): ITreeUINode<Data> => ({
        data,
        key,
        index,
        level,
        isCollapsed,
        isNode
    });

    const toTree = (
        bookContentsDataAll: Array<INode<Data> & Data>,
        level: number = 0
    ) =>
        bookContentsDataAll.map((bookContentsData, index) => {
            const data = bookContentsData;
            const key = `${level}.${index}`;
            const isCollapsed = true;

            if (isChildren(data)) {
                const children = dataToTree(
                    data.children as Array<INode<Data> & Data>,
                    level + 1
                );
                const isNode = true;

                return createNode({
                    data,
                    children,
                    key,
                    index,
                    level,
                    isCollapsed,
                    isNode
                });
            }

            return createLeaf({
                data,
                key,
                index,
                level,
                isCollapsed,
                isNode: false
            });
        });

    return toTree(d);
};

export const module: Module<ILocalState, {}> = {
    state: {
        contents: [],
        isBookContentsToggleAll: true,

        currentSubChapterAll: [],

        currentChapterContent: '',

        currentChapterName: null,

        currentChapterPath: null,
        nextChapterPath: null,
        prevChapterPath: null,

        isCurrentChapterContentLoaded: false,

        isNextChapter: false,
        isPrevChapter: false,

        chapterIndex: 0,
        chapterTotalIndex: 0
    },
    mutations: {
        addContents: (state: ILocalState, contents: IBookContentsNode[]) => {
            state.contents = contents;
        },
        toggleAll: (state: ILocalState) => {
            state.isBookContentsToggleAll = !state.isBookContentsToggleAll;

            collapseAll(state.contents, state.isBookContentsToggleAll);
        },
        toggleByLevelAndIndex: (state: ILocalState, { level, index }) => {
            const node = findNode(level, index, state.contents);

            if (node) {
                node.isCollapsed = !node.isCollapsed;
            } else {
                throw treeError(level, index);
            }
        },

        setChapter: (
            state: ILocalState,
            { chapter, chapterName }: { chapter: string; chapterName: string }
        ) => {
            state.currentChapterContent = chapter;

            let { contents } = state;
            let currentChapter = contents.find(
                info => info.data.path === chapterName
            ) as IBookContentsNode;

            let currentChapterIndex = contents.indexOf(currentChapter);

            let nextChapter = contents[currentChapterIndex + 1];
            let prevChapter = contents[currentChapterIndex - 1];

            state.currentChapterName = currentChapter.data.name;

            state.currentChapterPath = currentChapter.data.path;
            state.nextChapterPath = nextChapter ? nextChapter.data.path : null;
            state.prevChapterPath = prevChapter ? prevChapter.data.path : null;

            state.isNextChapter = state.nextChapterPath !== null;
            state.isPrevChapter = state.prevChapterPath !== null;

            state.chapterIndex = currentChapterIndex;
            state.chapterTotalIndex = contents.length;
            state.currentSubChapterAll = currentChapter.children as ITreeUINode<
                IBookSubchapter
            >[];
        }
    },
    actions: {
        bookContentsLoad: async ({ state, commit }) => {
            if (!state.contents.length) {
                const data: BookContentsDataNode[] = await BookLoader.loadContents();
                const contents = dataToTree(data);

                commit('addContents', contents);
            }
        },
        async bookLoadChapterByName({ state, commit }, chapterName: string) {
            let chapter = await BookLoader.loadChapterByName(chapterName);

            console.log('load chapter with name', chapterName);

            commit('setChapter', { chapter, chapterName });
        },
        bookContentsToggleAll: ({ state, commit }) => {
            commit('toggleAll');
        },
        bookContentsToggleByLevelAndIndex: (
            { state, commit },
            { level, index }
        ) => {
            commit('toggleByLevelAndIndex', { level, index });
        }
    },
    getters: {
        bookCurrentChapterContent: state => state.currentChapterContent,

        bookCurrentChapterName: state => state.currentChapterName,

        bookCurrentChapterPath: state => state.currentChapterPath,
        bookNextChapterPath: state => state.nextChapterPath,
        bookPrevChapterPath: state => state.prevChapterPath,

        isBookNextChapter: state => state.isNextChapter,
        isBookPrevChapter: state => state.isPrevChapter,

        bookCurrentChapterIndex: state => state.chapterIndex,
        bookChapterTotalIndex: state => state.chapterTotalIndex,
        bookContents: state => state.contents,

        bookCurrentSubchapterAll: state => {
            return state.currentSubChapterAll;
        },

        isCurrentChapterContentLoaded: state =>
            state.currentChapterContent !== '',

        isBookContentsLoad: state => state.contents.length > 0,
        isBookContentsToggleAll: state => state.isBookContentsToggleAll,
        isChapterExist: state => (
            chapterName: string,
            subchapterName?: string
        ) => {
            let chapter = state.contents.find(
                chapter => chapter.data.path === chapterName
            );

            if (chapter === undefined) {
                return false;
            }

            if (subchapterName === undefined) {
                return true;
            }

            if (chapter.children === undefined) {
                return false;
            }

            let isSubchapterExistValid = chapter.children.some(
                subchapter =>
                    (subchapter.data as IBookSubchapter).anchor ===
                    subchapterName
            );

            return isSubchapterExistValid;
        },
        getChapterNameByChapterPath: state => (chapterPath: string) => {
            let chapter = state.contents.find(
                info => info.data.path === chapterPath
            );

            return chapter !== undefined ? chapter.data.name : '';
        }
    }
};
