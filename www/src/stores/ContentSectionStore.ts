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
    this.currentSectionId = StringUtils.urlToNativeElementAttributeValue(this.router.anchor);

    computed(() => this.router.route).observe(changes => {
      this.currentSectionId = StringUtils.urlToNativeElementAttributeValue(this.router.anchor);
    });

    type ChangeData = IArrayChange<IIntersectionObserverEntryInfo> | IArraySplice<IIntersectionObserverEntryInfo>;

    ( this.contentIntersectionObserver.intersections as IObservableArray<IIntersectionObserverEntryInfo> ).observe( ( changes: ChangeData ) => {
      let entry:IIntersectionObserverEntryInfo | undefined;

      if(changes.type === "update"){
        entry = changes.newValue;
      }else{
        entry = changes.added
          .filter(item => item.isIntersecting)
          .pop();
      }





      if ( !entry || !entry.isIntersecting ) {
        return;
      }


      this.currentSectionId = StringUtils.pathToNativeElementAttributeValue(entry.sectionId);
    } );
  }

  toString(){
    return `[mobx ContentSectionStore]`;
  }
}

decorate( ContentSectionStore, {
  currentSectionId: observable
} );
