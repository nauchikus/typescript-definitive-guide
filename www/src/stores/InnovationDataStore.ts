import { action, computed, decorate, observable } from "mobx";
import {
  IWhatIsNewTocInnovationWithContent,
} from "../types/IWhatIsNewToc";


interface IInnovationFilter<Id=unknown> {
  id: Id
  isActive:boolean;

  predicate(innovation: IWhatIsNewTocInnovationWithContent): boolean;
}

export class InnovationDataStore {
  get isActive(){
    return this.innovationDataAll.length !== this._innovationDataAll.length;
  }

  get filters(){
    return this.filterAll.filter(filter => filter.isActive);
  }
  get innovationDataAll(){
    return this._innovationDataAll.filter(innovation =>
      this.filters.every(filter => filter.predicate(innovation))
    );
  }

  readonly filterAll: IInnovationFilter[] = [];


  constructor (private _innovationDataAll: IWhatIsNewTocInnovationWithContent[]) {
  }

  readonly addFilter = (filter: IInnovationFilter) => this.filterAll.push(filter);
  readonly deleteFilter = (filter: IInnovationFilter) => this.filterAll
    .splice(this.filterAll.indexOf(filter), 1);
  readonly isFilterActiveById = <T>(filterId:T) => {
    let filter = this.filters.find(item => item.id === filterId);

    return filter ? filter.isActive : false;
  }
}

decorate( InnovationDataStore, {
  isActive: computed,
  filters: computed,
  innovationDataAll: computed,
  filterAll: observable,
  isFilterActiveById: action,
} );
