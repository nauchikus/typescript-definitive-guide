import React, { FC } from "react";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { ILinkAppDriverData, LinkAppDriver } from "../app-driver__what-is-new-page/WhatIsNewPageAppDriver";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { useRouter } from "../../stores/RouterStore";
import { useAppDriver } from "../../mobx__entry/SharedPageMobxEntry";

interface IAppNavSectionAppDriverProps {
}

export const AppNavSectionAppDriver:FC<IAppNavSectionAppDriverProps>=( )=>{
  let [appNavigationAll] = useTranslator<[AppNavigationLocalization]>( LocalizationPaths.AppNavigation );
  let router = useRouter();
  let appDriver = useAppDriver();

  const hasAppNavLinkActive = ( href: string ) => {
    let isMatch = router.pathname === href;

    return isMatch;
  }

  const appDriverAutoClose = () => {
    const APP_DRIVER_AUTO_CLOSE_MIN_WIDTH = parseInt(
      window.getComputedStyle( document.documentElement )
        .getPropertyValue( `--content-layout__driver-and-content_min-width` )
    );

    let currentWidth = document.documentElement.clientWidth;


    if ( currentWidth < APP_DRIVER_AUTO_CLOSE_MIN_WIDTH ) {
      // appDriver.close();
    }
  };


  let appNavLinkDataAll = appNavigationAll.map( ( { name, path }, index ) => ( {
    name,
    path,
    isActive: hasAppNavLinkActive( path ),
    activeClassName: "app-driver__link_active"
  } ) );

  let appNavLinkAll = appNavLinkDataAll.map( ( data, index ) => (
    <LinkAppDriver key={ index } {...data} onClick={appDriverAutoClose}/>
  ) );



  return (
    <NavSectionAppDriver itemLabel={ "Навигация" }
                         itemIndex={ 0 }>
      { appNavLinkAll }
    </NavSectionAppDriver>
  );
}
