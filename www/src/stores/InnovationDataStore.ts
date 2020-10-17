import { action, computed, decorate, observable } from "mobx";
import {
  IWhatIsNewTocInnovationWithContent,
} from "../types/IWhatIsNewToc";
import { ContentDataWinPageStore } from "./ContentDataWinPageStore";
import { Observable, Subscription } from "rxjs";


export interface IInnovationFilter<Id=unknown> {
  id: Id
  isActive:boolean;

  predicate(innovation: IWhatIsNewTocInnovationWithContent): boolean;

  getObservable(): Observable<IInnovationFilter>;
}

export class InnovationDataStore {
  private filterSubscriptionMap = new Map<IInnovationFilter, Subscription>();


  get isActive(){
    return this.innovationDataAll.length !== this.contentDataWinPageStore.innovations.length;
  }

  get filters(){
    return this.filterAll.filter(filter => filter.isActive);
  }
  // get innovationDataAll(){
  //   return this.contentDataWinPageStore.pageContent.innovations.filter(innovation =>
  //     this.filters.every(filter => filter.predicate(innovation))
  //   );
  // }

  innovationDataAll:  IWhatIsNewTocInnovationWithContent[];

  readonly filterAll: IInnovationFilter[] = [];


  constructor (readonly contentDataWinPageStore: ContentDataWinPageStore) {
    this.innovationDataAll = this.update();
  }

  readonly addFilter = (filter: IInnovationFilter) => {
    this.filterAll.push(filter)

    let subscription = filter.getObservable()
      .subscribe(() => this.innovationDataAll = this.update());

    this.filterSubscriptionMap.set(filter, subscription);
  };
  readonly deleteFilter = (filter: IInnovationFilter) => this.filterAll
    .splice(this.filterAll.indexOf(filter), 1);
  readonly deleteAllFilter = () => {
    while(this.filterAll.length){
      let filter = this.filterAll.pop();

      if (filter) {
        this.filterSubscriptionMap.delete(filter);
      }
    }
  };
  readonly isFilterActiveById = <T>(filterId:T) => {
    let filter = this.filters.find(item => item.id === filterId);

    return filter ? filter.isActive : false;
  }

  private update = () => {
    let innovationDataAll = this.contentDataWinPageStore.innovations.filter(innovation =>
      this.filters.every(filter => filter.predicate(innovation))
    );

    return innovationDataAll;
  }
}

decorate( InnovationDataStore, {
  isActive: computed,
  filters: computed,
  innovationDataAll: observable,
  filterAll: observable,
  isFilterActiveById: action,
} );
