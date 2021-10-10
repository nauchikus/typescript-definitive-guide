import {BOTTOM_CONTENT_INTERSECTION, TOP_CONTENT_INTERSECTION} from "../consts/intersection-observer";
import {action, computed, makeObservable, observable} from "mobx";
import {ContentNavItem} from "../models/ContentNav";
import {Scroll} from "./Scroll";

type ContentNavMetadata = { index: number, elementId: string, path: string, key: string };
type SetId = string | null | undefined;


export class ContentNavService {
    private static createContentNavMetadataAll = (contentNavTreeNode: ContentNavItem) => {
        /// TODO: [refactoring] Remove elementId
        const createMetadata = ({
                                    elementId,
                                    path,
                                    contentIndex: index,
                                    key
                                }: ContentNavItem): ContentNavMetadata => {
            return {index, elementId, path, key};
        };
        /// TODO: [refactoring]
        // const parse = (node: ContentNavTreeNode | ContentNavTreeLeaf) => {
        //     return [createMetadata(node)]
        //         .concat("children" in node ? node.children.map(parse).flat() : []);
        // }

        const parse = (node: ContentNavItem) => {
            let array = [createMetadata(node)];

            if ("children" in node) {
                node.children?.forEach(node => array.push(createMetadata(node)));
            }

            return array;
        }
        return parse(contentNavTreeNode);
    };
    private static createPrevIds = (contentNavMetadataAll: ContentNavMetadata[]): ReadonlySet<SetId> => {
        const prevIds = new Set<SetId>([...contentNavMetadataAll]
            .splice(1)
            .map(item => item.path)
        );

        return prevIds;
    }
    private static createNextIds = (contentNavMetadataAll: ContentNavMetadata[]): ReadonlySet<SetId> => {
        const nextIds = new Set<SetId>([...contentNavMetadataAll]
            .splice(0, contentNavMetadataAll.length - 1)
            .map((item, _, array) => item.path)
        );


        return nextIds;
    }
    private static createElementIdByKeyMap = (contentNavMetadataAll: ContentNavMetadata[]): ReadonlyMap<string, string> => {
        const elementIdByKeyMap = contentNavMetadataAll.reduce((map, {path, key}) => {
            return map.set(path, key);
        }, new Map<string, string>());

        return elementIdByKeyMap;
    }


    private contentNavMetadataAll: ContentNavMetadata[];

    private elementIdByKeyMap: ReadonlyMap<string, string>;

    private prevIds: ReadonlySet<SetId>;
    private nextIds: ReadonlySet<SetId>;


    private contentNavTreeNode: ContentNavItem;

    get tree(){
        return this.contentNavTreeNode;
    }

    constructor(contentNavTreeNode: ContentNavItem) {
        this.update(contentNavTreeNode);

        makeObservable(this, {
            contentNavTreeNode: observable,
            update: action,
        });
    }

    readonly update  = (contentNavTreeNode: ContentNavItem) => {
        this.contentNavTreeNode = contentNavTreeNode;
        this.contentNavMetadataAll = ContentNavService.createContentNavMetadataAll(this.contentNavTreeNode);
        this.elementIdByKeyMap = ContentNavService.createElementIdByKeyMap(this.contentNavMetadataAll);
        this.prevIds = ContentNavService.createPrevIds(this.contentNavMetadataAll);
        this.nextIds = ContentNavService.createNextIds(this.contentNavMetadataAll);
    }

    private isStartContent = (elementId: string | null |undefined) => elementId === TOP_CONTENT_INTERSECTION;
    private isEndContent = (elementId: string | null | undefined) => elementId === BOTTOM_CONTENT_INTERSECTION;

    private getFirstMetadata = () => this.contentNavMetadataAll[0];
    private getLastMetadata = () => this.contentNavMetadataAll[this.contentNavMetadataAll.length - 1];

    private goToAnchor = (anchor: string) => {
        function scrollHandler(event) {
            window.removeEventListener("scroll", scrollHandler);

            window.scrollTo({
                left: 0,
            });
        }

        window.addEventListener("scroll", scrollHandler);

        let sectionId = decodeURIComponent(anchor);
        let element = document.getElementById<HTMLElement>(`${sectionId}`);

        element.scrollIntoView();
    }

    private getPrevAnchor = (currentelementId: string) => {
        let isEnd = this.isEndContent(currentelementId)
        let prevMetadata: ContentNavMetadata;


        if (isEnd) {
            prevMetadata = this.getLastMetadata();
        }else{
            let metadata = this.contentNavMetadataAll.find(item => item.path === currentelementId);

            if (!metadata) {
                // throw new Error(`Metadata with elementId "${store.activeelementId}" not found.`);
            }

            prevMetadata = this.contentNavMetadataAll[metadata.index - 1];
        }


        if (!prevMetadata) {
            throw new Error(`Prev metadata for elementId "${currentelementId}" not exists.`);
        }



        return prevMetadata.path;
    }
    private getNextAnchor = (currentElementId: string) => {
        let isStart = this.isStartContent(currentElementId)
        let nextMetadata: ContentNavMetadata;


        if (isStart) {
            nextMetadata = this.getFirstMetadata();
        }else{
            let metadata = this.contentNavMetadataAll.find(item => item.path === currentElementId);

            if (!metadata) {
                // throw new Error(`Metadata with elementId "${store.activeelementId}" not found.`);
            }

            nextMetadata = this.contentNavMetadataAll[metadata.index + 1];
        }


        if (!nextMetadata) {
            throw new Error(`Prev metadata for elementId "${currentElementId}" not exists.`);
        }



        return nextMetadata.path;
    }


    /*  */

    readonly getActiveKeyByElementId = (elementId: string) => {
        return this.elementIdByKeyMap.get(elementId);
    }
    readonly isPrev = (elementId: string) => {
        return this.prevIds.has(elementId) || this.isEndContent(elementId);
    }
    readonly isNext = (elementId: string) => {
        return this.nextIds.has(elementId) || this.isStartContent(elementId);
    }

    readonly goPrev = (elementId: string) => {
        this.goToAnchor(this.getPrevAnchor(elementId));
    }
    readonly goNext = (elementId: string) => {
        this.goToAnchor(this.getNextAnchor(elementId));
    }
}
