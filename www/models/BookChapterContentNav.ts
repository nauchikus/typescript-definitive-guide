import {ContentNavItem} from "./ContentNav";

export interface BookChapterContentNav extends ContentNavItem {
    section: string;
    contentIndex: string;
}