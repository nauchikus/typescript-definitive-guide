import { BaseMobxFilter } from "./BaseMobxFilter";
import { FilterId } from "../enums/FilterId";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { IWhatIsNewTocInnovationWithContent } from "../types/IWhatIsNewToc";
import { Subject } from "rxjs";
import { IInnovationFilter } from "../stores/InnovationDataStore";
import { computed } from "mobx";



export class FormInnovationFilter extends BaseMobxFilter<FilterId.WinFormFilter> implements IInnovationFilter<FilterId.WinFormFilter>{
  private subject = new Subject<IInnovationFilter>();

  constructor(private versionFilterStore: VersionFilterStore) {
    super(FilterId.WinFormFilter);

    computed(() => this.versionFilterStore.checkedLength)
      .observe(() => this.subject.next(this));
  }


  readonly predicate = (innovation: IWhatIsNewTocInnovationWithContent) => {

    return this.versionFilterStore.canDisplayedByVersion(innovation.version);
  }

  readonly getObservable = () => this.subject.asObservable();


}

