import { useLayoutEffect } from "react";
import { useInnovationVersionFilterData, useVersionFilter } from "../mobx__entry/WinPageMobxEntry";
import { computed } from "mobx";

export function useVersionFilterUpdater(){
  let versionFilter = useVersionFilter();
  let innovationVersionFilterData = useInnovationVersionFilterData();

  useLayoutEffect(() => {
    computed(() => innovationVersionFilterData.versionFilterDataAll).observe(({ newValue }) => {
      versionFilter.clean();
      versionFilter.addVersionInfo(newValue);
      versionFilter.checkedAllVersion();
    });
  }, []);
}
