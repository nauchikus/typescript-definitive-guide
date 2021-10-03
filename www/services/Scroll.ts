import {has} from "mobx/src/api/object-api";

export class Scroll {
    static getClientRectByElementId = (id: string) => {
        let element = document.getElementById(id);
        let clientRect = element.getBoundingClientRect();

        return clientRect;
    }
    static scrollToElementWithId = (id: string) => {
        let {top} = Scroll.getClientRectByElementId(id);

        Scroll.scrollTo({
            top
        });
    }
    static scrollTo = (settings: {top?: number, left?: number}) => {
        window.scrollTo(settings);
    }
    static scrollToAnchor = (anchor: string) => {
        let {top} = Scroll.getClientRectByElementId(anchor);

        window.scrollTo({
            top: top + 50
        })
        // Scroll.scrollTo({
        //     left: 0,
        //     top
        // });

    }
    static scrollToHash = (hash: string) => {
        let anchor = hash.replace(`#`, ``);
        Scroll.scrollToAnchor(anchor);
    }
    static scrollToCurrentHash = () => {
        let {hash} = window.location;
        Scroll.scrollToHash(hash);
    }
}