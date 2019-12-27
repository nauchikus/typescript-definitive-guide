import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { useRouter } from "../../react__hooks/router-hook";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";
import { Link } from "gatsby";
import { pathToFileURL } from "url";
import { useContentSectionInformer } from "../../react__hooks/content-section-informer-hook";
import { useAppContentIntersectionObserver } from "../../react__hooks/scroll-page-hook";

interface IWhatIsNewPageAppDriverProps {
}

interface ILinkAppDriverProps {
  path:string;
  name:string;
  isActive:boolean;
  activeClassName:string;
}

export const LinkAppDriver: FC<ILinkAppDriverProps> = ( { path, name, isActive, activeClassName } ) => {
  let classes = cn( `app-driver__link`, {
    [ activeClassName ]: isActive
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



export const WhatIsNewPageAppDriver: FC<IWhatIsNewPageAppDriverProps> = ( {  } ) => {
  let [appNavigationAll] = useTranslator<[AppNavigationLocalization]>( LocalizationPaths.AppNavigation );
  let {winTocTreeStore} = useWhatIsNewStores();
  let routerStore = useRouter();
  let { activeSectionId } = useContentSectionInformer();


  let innovationAll = winTocTreeStore.getInnovationAllByVersionMMP( routerStore.pageName );


  const hasAppNavLinkActive = ( href: string ) =>
    routerStore.pathname === href;
  const hasPageNavLinkActive = ( href: string,anchor:string ) => {
    let isHashMatchValid = anchor === routerStore.anchor;
    let isAnchorMatchValid = anchor === activeSectionId;

    return ( isHashMatchValid && isAnchorMatchValid ) || isAnchorMatchValid;
  };


  if ( !innovationAll ) {
    throw new Error( "Innovation not found" );
  }


  let navItemAll = innovationAll.map( innovation => ( {
    path:`${routerStore.pathname}#${innovation.path}`,
    name: innovation.innovationName,
    anchor:innovation.path,
  } ) );



  let appNavLinkAll = appNavigationAll.map( ( { name, path }, index ) => (
    <LinkAppDriver key={ index }
                   name={ name }
                   path={ path }
                   isActive={ hasAppNavLinkActive( path ) }
                   activeClassName="app-driver__link_active"/>
  ) );
  let pageNavLinkAll = navItemAll.map( ( { name, path, anchor }, index ) => (
    <LinkAppDriver key={ index }
                   name={ name }
                   path={ path }
                   isActive={ hasPageNavLinkActive( path, anchor ) }
                   activeClassName="app-driver__link_page-nav-item_active"/>
  ) );
  return (
    <AppDriver>
      <NavSectionAppDriver itemLabel={ "Навигация" }
                           itemIndex={ 0 }>
        { appNavLinkAll }
      </NavSectionAppDriver>
      <NavSectionAppDriver itemLabel={ "Подразделы" }
                           itemIndex={ 1 }>
        { pageNavLinkAll }
      </NavSectionAppDriver>
      <FooterAppDriver/>
    </AppDriver>
  );
};
