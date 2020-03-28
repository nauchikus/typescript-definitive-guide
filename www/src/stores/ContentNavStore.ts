import { computed, decorate } from "mobx";
import { RouterStore } from "./RouterStore";
import { ContentSectionStore, IContentSectionStore } from "./ContentSectionStore";
import { IPageNavStore } from "./PageNavStore";


interface IContentNavStoreParams<TNodeData,TLeafData> {
  pageNav:IPageNavStore<TNodeData,TLeafData>;
  router:RouterStore;
  contentSection:IContentSectionStore;
}

export interface IContentNavStore<TNodeData, TLeafData> extends ContentNavStore<TNodeData,TLeafData>{

}
export class ContentNavStore<TNodeData,TLeafData> {
  static create = <TNodeData=null,TLeafData=null>( { pageNav, router, contentSection }: IContentNavStoreParams<TNodeData,TLeafData> ) => {
    return new ContentNavStore<TNodeData,TLeafData>(
      pageNav,
      router,
      contentSection
    );
  };


  get currentSectionId(){
    return this.contentSection.currentSectionId;
  }
  get pageItem () {
    return this.pageNav.pageItem;
  }
  get sectionAll(){
    return this.pageNav.pageItem.sections;
  }


  constructor(private pageNav:IPageNavStore<TNodeData,TLeafData>,
              private router:RouterStore,
              private contentSection:IContentSectionStore){}

  hasPrevPage () {
    return this.pageItem.hasPrevPage;
  }
  hasNextPage () {
    return this.pageItem.hasNextPage;
  }

  goPrevPage () {
    console.log(
      JSON.stringify(this.pageNav.pageItem),
      `${ this.router.basepath }/${ this.pageItem.prevPage?.path }`,
      `${ this.router.basepath }/${ this.pageItem.nextPage?.path }`
    );
    this.pageItem.prevPage && this.router.goTo(
      `${ this.router.basepath }/${ this.pageItem.prevPage.path }`
    );
  }

  goNextPage () {
    this.pageItem.nextPage && this.router.goTo(
      `${ this.router.basepath }/${ this.pageItem.nextPage.path }`
    );
  }

  hasPrevAnchor () {
    return this.pageNav.sectionItem?.prevAnchor != null;
  }
  hasNextAnchor () {
    return this.pageNav.sectionItem?.nextAnchor != null;
  }


  goPrevAnchor () {
    this.pageNav.sectionItem?.prevAnchor && this.router.goTo(
      `${ this.router.pathname }#${ this.pageNav.sectionItem.prevAnchor.path }`
    );
  }

  goNextAnchor () {
    this.pageNav.sectionItem?.nextAnchor && this.router.goTo(
      `${ this.router.pathname }#${ this.pageNav.sectionItem.nextAnchor.path }`
    );
  }
}

decorate( ContentNavStore, {
  currentSectionId: computed,
  pageItem: computed
} );