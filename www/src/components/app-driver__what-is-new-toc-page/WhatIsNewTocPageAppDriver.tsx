import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { Link } from "gatsby";
import { Version } from "../../utils/Version";
import { observer } from "mobx-react-lite";
import { useWhatIsNewTocStores } from "../../mobx__react-content-provider/MobxWhatIsNewTocProvider";
import { useRouter } from "../../stores/RouterStore";

interface IWhatIsNewPageAppDriverProps {
}

interface ILinkAppDriverProps {
  path:string;
  name:string;
  isActive:boolean;
  activeClassName:string;
  disabled?:boolean;
}

export const LinkAppDriver: FC<ILinkAppDriverProps> = ( { path, name, isActive, activeClassName ,disabled=false} ) => {
  let classes = cn( `app-driver__link`, {
    [ activeClassName ]: isActive,
    [ `app-driver__link_disabled` ]: disabled
  } );
  let linkProps = { className: classes };

  return (
    <div className="app-driver__list-item">
      <Link className="app-driver__list-item"
            to={ path }
            getProps={ () => linkProps }>
        { name }
      </Link>
    </div>

  );
};


export const WhatIsNewTocPageAppDriver: FC<IWhatIsNewPageAppDriverProps> = observer( ( {} ) => {
  let [appNavigationAll] = useTranslator<[AppNavigationLocalization]>( LocalizationPaths.AppNavigation );
  // let { winTocTreeStore } = useWhatIsNewTocStores();
  let router = useRouter();



  const hasAppNavLinkActive = ( href: string ) =>
    router.pathname === href;



  let appNavLinkAll = appNavigationAll.map( ( { name, path }, index ) => (
    <LinkAppDriver key={ index }
                   name={ name }
                   path={ path }
                   isActive={ hasAppNavLinkActive( path ) }
                   activeClassName="app-driver__link_active"/>
  ) );


  return (
    <AppDriver>
      <NavSectionAppDriver itemLabel={ "Навигация" }
                           itemIndex={ 0 }>
        { appNavLinkAll }
      </NavSectionAppDriver>
      <FooterAppDriver/>
    </AppDriver>
  );
} );
