import {toUrl} from "../utils/converter-path-utils";

export interface ContentNavItem<T = unknown> {
    key: string;
    level: number;
    index: number;
    contentIndex: number;
    title: string;
    path: string;
    elementId: string;

    children?: (ContentNavItem & T)[];
}