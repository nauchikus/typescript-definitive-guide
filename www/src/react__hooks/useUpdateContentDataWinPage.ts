import { useEffect } from "react";
import { useWhatIsNewPageStores } from "../mobx__entry/WinPageMobxEntry";
import { IWinPageContentData } from "../types/IWhatIsNewToc";

export function useUpdateContentDataWinPage(innovationData: IWinPageContentData ){
  let stores = useWhatIsNewPageStores();

  useEffect(()=> {
    stores.contentDataWinPageStore.setPageContent(innovationData);
  }, [innovationData.mmp])
}
