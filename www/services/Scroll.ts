import {has} from "mobx/src/api/object-api";

/// TODO: [refactoring][optimize]
export class ScrollOffsetStrategy {
    get offset(){
        let appHeaderHeight = window
            .getComputedStyle(document.body)
            .getPropertyValue(`--app-header_height`);


        return parseFloat(appHeaderHeight);
    }
    constructor() {
    }
}

export class Scroll {
    /// TODO: [refactoring]
    static offset = new ScrollOffsetStrategy();

    static getHash = () => window.location.hash.replace(`#`, ``);
    static get isHash(){
        return Scroll.getHash().length > 0;
    }
    static get isAutoscrollComplete(){
        let clientRect = Scroll.getCurrentClientRect();

        return Math.round(clientRect.top) < Scroll.offset.offset;
    }
    static getClientRectById = (id: string) => {
        let element = document.getElementById<HTMLElement>(`${id}`);
        let clientRect = element.getBoundingClientRect();

        return clientRect;
    }
    static getCurrentAnchor = () => {
        let hash = Scroll.getHash();
        let anchor = decodeURIComponent(hash);

        return anchor;
    }
    static getCurrentClientRect = () =>
        Scroll.getClientRectById(Scroll.getCurrentAnchor());
    static scrollToCurrentHash = () => {
        if (Scroll.isHash) {
            // window.scrollTo({
            //     left: 0,
            //     top: Scroll.isAutoscrollComplete ? pageYOffset - Scroll.offset.offset : pageYOffset
            // });
        }
    }
    static scrollTo = () => {

    }
    static scrollToAnchor = (anchor: string) => {
        let clientRect = Scroll.getClientRectById(anchor);

        // window.scrollTo({
        //     left: 0,
        //     top: clientRect.top + pageYOffset - Scroll.offset.offset
        // });
    }
}
