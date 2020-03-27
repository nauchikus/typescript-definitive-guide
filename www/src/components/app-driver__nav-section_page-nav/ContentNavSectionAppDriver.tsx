import React, { FC } from "react";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { ILinkAppDriverData, LinkAppDriver } from "../app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { useRouter } from "../../stores/RouterStore";

interface IContentNavSectionAppDriverProps {
  contentNavLinkDataAll:ILinkAppDriverData[];
}

export const ContentNavSectionAppDriver: FC<IContentNavSectionAppDriverProps> = ( { contentNavLinkDataAll } ) => {
  let contentNavLinkAll = contentNavLinkDataAll.map( ( data, index ) => (
    <LinkAppDriver key={ index } { ...data } />
  ) );


  return (
    <NavSectionAppDriver itemLabel={ "Подразделы" }
                         itemIndex={ 1 }>
      { contentNavLinkAll }
    </NavSectionAppDriver>
  );
};