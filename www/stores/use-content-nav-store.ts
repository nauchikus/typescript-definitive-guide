import {useLocalObservable} from "mobx-react-lite";
import {useContentActiveSectionStore} from "./use-content-active-section-store";
import type {ContentNavService} from "../services/ContentNavService";


export type UseContentNav = ReturnType<typeof useContentNavStore>;

export function useContentNavStore(contentNavService: ContentNavService){
    const intersectionStore = useContentActiveSectionStore();

    const store = useLocalObservable(() => {
        return {
            get tree(){
                return contentNavService.tree;
            },
            get activeKeys(){
                return store.activeElementId ? [contentNavService.getActiveKeyByElementId(store.activeElementId)] : [];
            },
            get isPrev() {
                return store.activeElementId ? contentNavService.isPrev(store.activeElementId) : false;
            },
            get isNext() {
                return store.activeElementId ? contentNavService.isNext(store.activeElementId) : false;
            },
            get activeElementId() {
                console.log(`[[ELEMENT_ID ${intersectionStore.elementId}]]`)
                return intersectionStore.elementId;
            },
            goPrev() {
                if (!store.activeElementId) {
                    return;
                }
                contentNavService.goPrev(store.activeElementId);
            },
            goNext() {
                if (!store.activeElementId) {
                    return;
                }
                contentNavService.goNext(store.activeElementId);
            },
            goCurrentAnchor(){

            }
        }
    });


    return store;
}