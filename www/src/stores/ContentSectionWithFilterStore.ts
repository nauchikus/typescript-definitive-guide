import { RouterStore } from "./RouterStore";
import { computed, decorate, IObservableArray } from "mobx";
import { IArrayChange, IArraySplice } from "mobx/lib/types/observablearray";
import { IIntersectionObserverEntryInfo, IntersectionObserverStore } from "./IntersectionObserverStore";
import { VersionFilterStore } from "./VersionFilterStore";
import { VisibleSectionValidator } from "../validators/VisibleSectionValidator";
import { IContentSectionStore } from "./ContentSectionStore";

interface IContentSectionWithFilterStoreParams {
  contentSection:IContentSectionStore;
  router:RouterStore;
  contentIntersectionObserver:IntersectionObserverStore;
  versionFilter:VersionFilterStore;
  visibleSectionValidator:VisibleSectionValidator;
}

export class ContentSectionWithFilterStore implements IContentSectionStore{
  public static create = ( params: IContentSectionWithFilterStoreParams ) => new ContentSectionWithFilterStore(
    params.contentSection,
    params.visibleSectionValidator,
    params.router,
    params.contentIntersectionObserver,
    params.versionFilter,
  );

  private static DEFAULT_SECTION_ID = ``;

  public get currentSectionId(){
    return this.contentSection.currentSectionId;
  }



  constructor ( private contentSection:IContentSectionStore,
                private visibleSectionValidator:VisibleSectionValidator,
                private router:RouterStore,
                private contentIntersectionObserver:IntersectionObserverStore,
                private versionFilter: VersionFilterStore ) {

    computed( () => this.versionFilter.checkedLength ).observe( () => {
      if ( !this.versionFilter.isAllVersionChecked && !this.visibleSectionValidator.validate( this.currentSectionId ) ) {
        this.contentSection.currentSectionId = ContentSectionWithFilterStore.DEFAULT_SECTION_ID;
      }
    } );
    // computed( () => this.router.anchor ).observe( changes => {
    //   this.contentSection.currentSectionId = changes.newValue;
    // } );

    // type ChangeData = IArrayChange<IIntersectionObserverEntryInfo> | IArraySplice<IIntersectionObserverEntryInfo>;
    //
    // ( this.contentIntersectionObserver.intersections as IObservableArray<IIntersectionObserverEntryInfo> ).observe( ( changes: ChangeData ) => {
    //   let entry = changes.type === "update" ?
    //     changes.newValue :
    //     changes.added.find( item => item.isIntersecting );
    //
    //
    //   if ( !entry || !entry.isIntersecting ) {
    //     return;
    //   }
    //
    //
    //   this.contentSection.currentSectionId = entry.sectionId;
    // } );
  }
}

decorate( ContentSectionWithFilterStore, {
  currentSectionId: computed
} );