import { useEffect } from "react";
import { useVersionFilter } from "../mobx__entry/WinPageMobxEntry";
import { InnovationFilterSearchParamsParser } from "../parsers/InnovationFilterSearchParamsParser";
import { useRouter } from "../stores/RouterStore";

export function useVersionFilterInitializer(){
  let versionFilter = useVersionFilter();
  let router = useRouter();

  useEffect(() => {
    let versionFilterSearchParamsAll = InnovationFilterSearchParamsParser.parse(
      router.urlSearchParams
    );

    versionFilterSearchParamsAll.length ?
      versionFilter.checkedByVersion(...versionFilterSearchParamsAll) :
      versionFilter.checkedAllVersion();
  }, []);
}
