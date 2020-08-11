import { RouterStore } from "./RouterStore";
import { computed, decorate, IObservableArray, observable } from "mobx";
import { IArrayChange, IArraySplice } from "mobx/lib/types/observablearray";
import { IIntersectionObserverEntryInfo, IntersectionObserverStore } from "./IntersectionObserverStore";
import * as StringUtils from "../utils/string-utils";

interface IContentSectionStoreParams {
  router:RouterStore;
  contentIntersectionObserver:IntersectionObserverStore;
}

export interface IContentSectionStore {
  currentSectionId:string;
}
export class ContentSectionStore implements IContentSectionStore{
  public static create = ( params: IContentSectionStoreParams ) => new ContentSectionStore(
    params.router,
    params.contentIntersectionObserver,
  );

  private static DEFAULT_SECTION_ID = ``;

  public currentSectionId = ContentSectionStore.DEFAULT_SECTION_ID;



  constructor ( private router:RouterStore,
                private contentIntersectionObserver:IntersectionObserverStore ) {
    computed( () => this.router.anchor ).observe( changes => {
      // console.log(`[ContentSectionStore] > ${StringUtils.urlToNativeElementAttributeValue(changes.newValue)}`)
      this.currentSectionId = StringUtils.urlToNativeElementAttributeValue(changes.newValue);
    } );

    type ChangeData = IArrayChange<IIntersectionObserverEntryInfo> | IArraySplice<IIntersectionObserverEntryInfo>;

    ( this.contentIntersectionObserver.intersections as IObservableArray<IIntersectionObserverEntryInfo> ).observe( ( changes: ChangeData ) => {
      let entry = changes.type === "update" ?
        changes.newValue :
        changes.added.find( item => item.isIntersecting );


      if ( !entry || !entry.isIntersecting ) {
        return;
      }


      this.currentSectionId = entry.sectionId;
    } );
  }
}

decorate( ContentSectionStore, {
  currentSectionId: observable
} );