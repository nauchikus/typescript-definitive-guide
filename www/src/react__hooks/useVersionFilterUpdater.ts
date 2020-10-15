import { useEffect } from "react";
import { useInnovationVersionFilterData, useVersionFilter } from "../mobx__entry/WinPageMobxEntry";
import { InnovationFilterSearchParamsParser } from "../parsers/InnovationFilterSearchParamsParser";
import { useRouter } from "../stores/RouterStore";
import { computed } from "mobx";

export function useVersionFilterUpdater(){
  let versionFilter = useVersionFilter();
  let innovationVersionFilterData = useInnovationVersionFilterData();

  useEffect(() => {
    computed(() => innovationVersionFilterData.versionFilterDataAll).observe(({ newValue }) => {
      versionFilter.clean();
      versionFilter.addVersionInfo(newValue);
      versionFilter.checkedAllVersion();
    });
  }, []);
}
