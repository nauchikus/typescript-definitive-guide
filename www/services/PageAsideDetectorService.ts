import {
    BOTTOM_CONTENT_INTERSECTION,
    INSIDE_CONTENT_INTERSECTION,
    TOP_CONTENT_INTERSECTION
} from "../consts/intersection-observer";

export class PageAsideDetectorService {
    static readonly PAGE_CONTENT_ELEMENT_SELECTOR = `#content`;
    static readonly getIdByClientRect = () => {
        const content = document.querySelector(PageAsideDetectorService.PAGE_CONTENT_ELEMENT_SELECTOR) as HTMLElement;
        const ccr = content.getBoundingClientRect();

        if (ccr.top > 0) {
            return TOP_CONTENT_INTERSECTION;
        }else if (ccr.bottom < document.documentElement.clientHeight) {
            return BOTTOM_CONTENT_INTERSECTION;
        }

        return INSIDE_CONTENT_INTERSECTION;
    }
}