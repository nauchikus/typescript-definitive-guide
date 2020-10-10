import { computed, decorate, observable } from "mobx";
import { InnovationDataStore } from "./InnovationDataStore";
import { FilterId } from "../enums/FilterId";




export class InnovationFilterStore {
  get isSearchParamsFilterActive(){
    return this.innovationDataStore.filters
      .find(filter => filter.id === FilterId.WinSearchParamsFilter)?.isActive ?? false
  }

  constructor (private innovationDataStore: InnovationDataStore) {
  }

}

decorate( InnovationFilterStore, {
  isSearchParamsFilterActive: computed,
} );
