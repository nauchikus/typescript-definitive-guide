import { BaseMobxFilter } from "./BaseMobxFilter";
import { FilterId } from "../enums/FilterId";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { IWhatIsNewTocInnovationWithContent } from "../types/IWhatIsNewToc";


interface IInnovationFilter<T> {
}

export class FormInnovationFilter extends BaseMobxFilter<FilterId.WinFormFilter> implements IInnovationFilter<FilterId.WinFormFilter>{
  constructor(private versionFilterStore: VersionFilterStore) {
    super(FilterId.WinFormFilter);
  }


  readonly predicate = (innovation: IWhatIsNewTocInnovationWithContent) => {
    return this.versionFilterStore.canDisplayedByVersion(innovation.version);
  }


}

