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
  get pageContent () {
    return this._pageContent;
  }

  constructor ( public _pageContent: IWinPageContentData) {

  }


  setPageContent = (pageContent: IWinPageContentData) =>
    this._pageContent = pageContent;
}

decorate( ContentDataWinPageStore, {
  _pageContent: observable,
  pageContent: computed,
  innovations: computed,
} );
