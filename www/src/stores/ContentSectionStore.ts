import { RouterStore } from "./RouterStore";
import { computed, decorate, IObservableArray, observable } from "mobx";
import { IArrayChange, IArraySplice } from "mobx/lib/types/observablearray";
import { IIntersectionObserverEntryInfo, IntersectionObserverStore } from "./IntersectionObserverStore";
import { VersionFilterStore } from "./VersionFilterStore";
import { VisibleSectionValidator } from "../validators/VisibleSectionValidator";

interface IContentSectionStoreParams {
  router:RouterStore;
  contentIntersectionObserver:IntersectionObserverStore;
  versionFilter:VersionFilterStore;
  visibleSectionValidator:VisibleSectionValidator;
}

export class ContentSectionStore {
  public static create = ( params: IContentSectionStoreParams ) => new ContentSectionStore( params );

  private static DEFAULT_SECTION_ID = ``;

  public currentSectionId = ContentSectionStore.DEFAULT_SECTION_ID;



  constructor ( { visibleSectionValidator,router, contentIntersectionObserver,versionFilter }: IContentSectionStoreParams ) {
    // versionFilter.versionInfoAll.observe( () => {
    //   if ( !versionFilter.isAllVersionChecked && !visibleSectionValidator.validate( this.currentSectionId ) ) {
    //     this.currentSectionId = ``;
    //   }
    // } );
    computed( () => versionFilter.checkedLength ).observe( () => {
      if ( !versionFilter.isAllVersionChecked && !visibleSectionValidator.validate( this.currentSectionId ) ) {
        this.currentSectionId = ``;
      }
    } );
    computed( () => router.anchor ).observe( changes => {
      this.currentSectionId = changes.newValue;
    } );

    type ChangeData = IArrayChange<IIntersectionObserverEntryInfo> | IArraySplice<IIntersectionObserverEntryInfo>;

    ( contentIntersectionObserver.intersections as IObservableArray<IIntersectionObserverEntryInfo> ).observe( ( changes: ChangeData ) => {
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