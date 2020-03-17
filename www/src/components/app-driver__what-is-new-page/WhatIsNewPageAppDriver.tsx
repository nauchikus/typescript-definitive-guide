import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { NavSectionAppDriver } from "../app-driver__nav-section/NavSectionAppDriver";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { useWhatIsNewStores } from "../../mobx__react-content-provider/MobxWhatIsNewProvider";
import { Link } from "gatsby";
import { Version } from "../../utils/Version";
import { observer } from "mobx-react-lite";
import { PageWithContentNavAppDriver } from "../app-driver__nav_page-with-content/PageWithContentNavAppDriver";
import { useRouter } from "../../stores/RouterStore";

interface IWhatIsNewPageAppDriverProps {
}

export interface ILinkAppDriverData {
  path:string;
  name:string;
  isActive:boolean;
  activeClassName:string;
  disabled?:boolean;
}
export interface ILinkAppDriverProps extends ILinkAppDriverData{}

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


export const WhatIsNewPageAppDriver: FC<IWhatIsNewPageAppDriverProps> = observer( ( {} ) => {
  let [appNavigationAll] = useTranslator<[AppNavigationLocalization]>( LocalizationPaths.AppNavigation );
  let { winTocTreeStore } = useWhatIsNewStores();
  let routerStore = useRouter();
  let { contentSection, versionFilter } = useWhatIsNewStores();


  let innovationAll = winTocTreeStore.getInnovationAllByVersionMMP( routerStore.pageName );


  const hasAppNavLinkActive = ( href: string ) =>
    routerStore.pathname === href;
  const hasPageNavLinkActive = ( href: string, anchor: string ) =>
    anchor === contentSection.currentSectionId;


  if ( !innovationAll ) {
    throw new Error( "Innovation not found" );
  }


  let navItemAll = innovationAll.map( innovation => ( {
    path: `${ routerStore.pathname }#${ innovation.path }`,
    name: innovation.innovationName,
    anchor: innovation.path,
    version: new Version( innovation.version ).preReleaseName
  } ) );


  let appNavLinkDataAll = appNavigationAll.map( ( { name, path }, index ) => ( {
    name,
    path,
    isActive: hasAppNavLinkActive( path ),
    activeClassName: "app-driver__link_active"
  } ) );
  let contentNavLinkDataAll = navItemAll.map( ( { name, path, anchor, version }, index ) => ( {
    name,
    path,
    isActive: hasPageNavLinkActive( path, anchor ),
    disabled: !versionFilter.isCheckedByVersion( version ),
    activeClassName: "app-driver__link_page-nav-item_active"
  } ) );


  return (
    <AppDriver>
      <PageWithContentNavAppDriver appNavLinkDataAll={appNavLinkDataAll} contentNavLinkDataAll={contentNavLinkDataAll}/>
      <FooterAppDriver/>
    </AppDriver>
  );
} );
