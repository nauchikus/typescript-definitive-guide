import React, {useLayoutEffect} from "react";
import {useLocalObservable} from "mobx-react-lite";
import {useRouter} from "next/router";
import {IntersectionService} from "../services/IntersectionService";
import {PageAsideDetectorService} from "../services/PageAsideDetectorService";

export type ContentActiveSectionStore = {
    activeId: string | null;
    elementId: string | null;

    setElementId(elementId: string | null): void;
}


export const useContentActiveSectionStore = (): ContentActiveSectionStore =>{
    const router = useRouter();

    const store = useLocalObservable<ContentActiveSectionStore>(() => ({
        activeId: null,
        elementId: null,
        setElementId(elementId: string | null){
            let nextElementId = elementId;


            if(!nextElementId){
                nextElementId = PageAsideDetectorService.getIdByClientRect();
            }

            store.elementId = nextElementId;
        }
    }));

    useLayoutEffect(() => {
        const appOffsetTop = parseFloat(
            window.getComputedStyle(document.body)
                .getPropertyValue(`--app-offset_top`)
        ) ?? 0;
        let appHeaderHeight = parseFloat(
            window.getComputedStyle(document.body)
                .getPropertyValue(`--app-header_height`)
        ) ?? 0;

        const offsetTop = appOffsetTop + appHeaderHeight;

        let intersection = new IntersectionService(
            `main section`,
            IntersectionService.createOffset(0, offsetTop)
        );

        function update(){
            store.setElementId(intersection.getElementIdByY());
        }

        function resizeHandler(){
            update();
        }
        function scrollHandler(){
            update();
        }

        update();

        window.addEventListener("resize", resizeHandler);
        window.addEventListener("scroll", scrollHandler);


        return () => {
            window.removeEventListener("resize", resizeHandler);
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [router.query.chapterId]);


    return store;
}
