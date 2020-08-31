import React, { FC } from "react";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { ILinkAppDriverData, LinkAppDriver } from "../app-driver__what-is-new-page/WhatIsNewPageAppDriver";

interface IPageWithContentNavAppDriverProps {
  appNavLinkDataAll:ILinkAppDriverData[];
  contentNavLinkDataAll:ILinkAppDriverData[];
}

export const PageWithContentNavAppDriver:FC<IPageWithContentNavAppDriverProps>=({appNavLinkDataAll,contentNavLinkDataAll})=>{
  let appNavLinkAll = appNavLinkDataAll.map( ( data, index ) => (
    <LinkAppDriver key={ index } {...data} />
  ) );
  let contentNavLinkAll = contentNavLinkDataAll.map( ( data, index ) => (
    <LinkAppDriver key={ index } { ...data } />
  ) );


  return (
    <>
      <NavSectionAppDriver itemLabel={ "Навигация" }
                           itemIndex={ 0 }>
        { appNavLinkAll }
      </NavSectionAppDriver>
      <NavSectionAppDriver itemLabel={ "Подразделы" }
                           itemIndex={ 1 }>
        { contentNavLinkAll }
      </NavSectionAppDriver>
    </>
  );
}