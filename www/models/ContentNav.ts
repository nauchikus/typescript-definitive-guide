import {toUrl} from "../utils/converter-path-utils";

export interface ContentNavItem<T = undefined> {
    key: string;
    level: number;
    index: number;
    title: string;
    path: string;
    elementId: string;

    children?: (ContentNavItem & T)[];
}