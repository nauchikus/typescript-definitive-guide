import { computed, decorate, observable } from "mobx";
import { ContentDataWinPageStore } from "./ContentDataWinPageStore";
import { innovationDataToVersionInfoTransformer } from "../transformers/innovationDataToVersionInfoTransformer";


export interface IInnovationVersionFilterStoreParams {
  contentDataWinPageStore: ContentDataWinPageStore;
}

export class InnovationVersionFilterDataStore {
  public static create = ( params: IInnovationVersionFilterStoreParams ) => new InnovationVersionFilterDataStore(
    params.contentDataWinPageStore
  );

  get versionFilterDataAll () {
    return innovationDataToVersionInfoTransformer(
      this.contentDataWinPageStore.pageContent
    );
  }

  constructor ( public contentDataWinPageStore: ContentDataWinPageStore) {

  }

}

decorate( InnovationVersionFilterDataStore, {
  versionFilterDataAll: computed,
} );
