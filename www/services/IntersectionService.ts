import {characterEntities} from "character-entities";

export type Offset = {
    x: number;
    y: number;
}


export class IntersectionService {
    static createOffset = (x = 0, y = 0) => ({x, y});

    static getElementBySelectorAll = (selector: string) =>
        Array.from<HTMLElement>(document.querySelectorAll(selector));

    private clientRectAll: ClientRect[]
    private clientRectToElementIdMap: Map<ClientRect, string>;

    private currentPageOffsetY: number;

    private scrollHeight = 0;

    private get isChangeHeight(){
        return this.scrollHeight !== document.documentElement.scrollHeight;
    }

    constructor(private selector: string, private offset: Offset) {
        this.update();
    }


    public update = () => {
        let elementAll = IntersectionService.getElementBySelectorAll(this.selector);

        this.clientRectToElementIdMap = elementAll.reduce((map, element) => {
            return map.set(
                element.getBoundingClientRect(),
                element.id
            );
        }, new Map<ClientRect, string>());

        this.clientRectAll = Array.from(this.clientRectToElementIdMap.keys());

        this.currentPageOffsetY = window.pageYOffset;
        this.scrollHeight = document.documentElement.scrollHeight;

    }


    public getElementIdByY = () => {
        if (this.isChangeHeight) {
            this.update();
        }

        let clientRectHit = this.clientRectAll.find(rect => {
                return rect.top + this.currentPageOffsetY - window.pageYOffset < this.offset.y &&
                    rect.bottom + this.currentPageOffsetY - window.pageYOffset >= this.offset.y
            }
        );



        return clientRectHit ? this.clientRectToElementIdMap.get(clientRectHit) ?? null : null;
    }

}