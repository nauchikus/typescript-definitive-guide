import React, { FC, useCallback } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { If } from "../if-operator/If";
import { observer } from "mobx-react-lite";
import { useRouter } from "../../stores/RouterStore";


interface IResetInnovationFilterButtonProviderProps {
}



export const RemoveSearchParamsButtonProvider: FC<IResetInnovationFilterButtonProviderProps> = observer(({ } ) => {
  let [t]=useTranslator<[BookTocGuiLocalization]>(LocalizationPaths.BookChaptersPageGui)
  let router = useRouter();

  let clickHandler = useCallback(() => {
    router.removeSearch();
  }, [])

  return (
    <button className="btn_remove-search-params"
            onClick={clickHandler}>
      Все нововведения
    </button>
  );
});
