import React, { FC } from "react";
import { If } from "../if-operator/If";
import { observer } from "mobx-react-lite";
import { EmptyContentPlaceholder } from "../content__placeholder_empty/EmptyContentPlaceholder";
import { useWhatIsNewPageStores } from "../../stores/WinPageMobxEntry";

interface IContentPlaceholderAutodetectProps {
}

export const ContentPlaceholderAutodetect: FC<IContentPlaceholderAutodetectProps> = observer( ( {} ) => {
  let { versionFilter } = useWhatIsNewPageStores();

  const isEmptySelectPlaceholderVisible = (  ) => versionFilter.checkedLength === 0;
  const isSelectWithoutInnovationPlaceholderVisible = () =>
    versionFilter.checkedLength > 0 && versionFilter.checkedInnovationCount === 0;
  const isSingleSelectVersion = (  ) => versionFilter.checkedLength === 1;
  const isMultiSelectVersion = (  ) => versionFilter.checkedLength > 1;

  return (
    <>
      <If condition={ isEmptySelectPlaceholderVisible(  ) }>
        <EmptyContentPlaceholder message="Ничего не выбранно"/>
      </If>
      <If condition={ isSelectWithoutInnovationPlaceholderVisible(  ) }>
        <If condition={isSingleSelectVersion()}>
          <EmptyContentPlaceholder message="Выбранная версия не содержит нововведений"/>
        </If>
        <If condition={isMultiSelectVersion()}>
          <EmptyContentPlaceholder message="Выбранные версии не содержат нововведений"/>
        </If>
      </If>
    </>
  );
} );
