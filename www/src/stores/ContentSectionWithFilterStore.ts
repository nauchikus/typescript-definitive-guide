import { RouterStore } from "./RouterStore";
import { computed, decorate } from "mobx";
import { IntersectionObserverStore } from "./IntersectionObserverStore";
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
  }
}

decorate( ContentSectionWithFilterStore, {
  currentSectionId: computed
} );
