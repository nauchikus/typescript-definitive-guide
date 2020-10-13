import { computed, decorate, observable } from "mobx";
import { IWinPageContentData } from "../types/IWhatIsNewToc";


export interface IContentDataWinPageStoreParams {
  pageContent: IWinPageContentData;
}

export class ContentDataWinPageStore {
  public static create = ( params: IContentDataWinPageStoreParams ) => new ContentDataWinPageStore(
    params.pageContent
  );

  get innovations () {
    return this.pageContent.innovations;
  }

  constructor ( public pageContent: IWinPageContentData) {

  }


  setPageContent = (pageContent: IWinPageContentData) =>
    this.pageContent = pageContent;
}

decorate( ContentDataWinPageStore, {
  pageContent: observable,
  innovations: computed,
} );
