import { useLayoutEffect } from "react";
import { useVersionFilter } from "../mobx__entry/WinPageMobxEntry";
import { InnovationFilterSearchParamsParser } from "../parsers/InnovationFilterSearchParamsParser";
import { useRouter } from "../stores/RouterStore";

export function useVersionFilterInitializer(){
  let versionFilter = useVersionFilter();
  let router = useRouter();

  useLayoutEffect(() => {
    let versionFilterSearchParamsAll = InnovationFilterSearchParamsParser.parse(
      router.urlSearchParams
    );

    if (versionFilterSearchParamsAll.length) {
      versionFilter.checkedOnlyByVersion(...versionFilterSearchParamsAll);
    }
  }, []);
}
