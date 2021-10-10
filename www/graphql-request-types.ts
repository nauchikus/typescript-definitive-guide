export interface IBookTocItem {
    section: string;
    title: string;
    subtitles: string[];
}

export interface IBookToc extends Array<IBookTocItem> {

}
