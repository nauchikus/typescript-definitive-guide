import React, { FC } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { Link } from "gatsby";
import { Version } from "../../utils/Version";
import { observer } from "mobx-react-lite";
import { useRouter } from "../../stores/RouterStore";
import { AppNavSectionAppDriver } from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import { ContentNavSectionAppDriver } from "../app-driver__nav-section_page-nav/ContentNavSectionAppDriver";
import { useWhatIsNewPageStores } from "../../mobx__entry/WinPageMobxEntry";
import * as WinTocVersionUtils from "../../utils/win-toc-version-utils";
import * as StringUtils from "../../utils/string-utils";
import { RouterUtils } from "../../utils/router-utils";

interface IWhatIsNewPageAppDriverProps {
}

export interface ILinkAppDriverData {
  path:string;
  name:string;
  isActive:boolean;
  activeClassName:string;
  disabled?:boolean;
}
export interface ILinkAppDriverProps extends ILinkAppDriverData{
  onClick?:()=>void;
}

export const LinkAppDriver: FC<ILinkAppDriverProps> = ( { path, name, isActive, activeClassName ,onClick,disabled=false} ) => {
  let classes = cn( `app-driver__link`, {
    [ activeClassName ]: isActive,
    [ `app-driver__link_disabled` ]: disabled
  } );
  let linkProps = { className: classes };

  const onClickWrapper = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // event.preventDefault();
    onClick && onClick();


  }

  return (
    <div className="app-driver__list-item">
      <Link className="app-driver__list-item"
            to={ path }
            getProps={ () => linkProps }
            onClick={onClickWrapper}>
        { name }
      </Link>
    </div>

  );
};


export const WhatIsNewPageAppDriver: FC<IWhatIsNewPageAppDriverProps> = observer( ( {} ) => {
  let { winTocCollapseStore } = useWhatIsNewPageStores();
  let routerStore = useRouter();
  let { contentSection, versionFilter } = useWhatIsNewPageStores();


  let innovationAll = WinTocVersionUtils.getInnovationAllByVersionMMP(
    routerStore.pageName,
    winTocCollapseStore.tree,
  );


  const hasPageNavLinkActive = (currentSectionId: string, anchor: string) => {
    return anchor === currentSectionId;
  }


  if ( !innovationAll ) {
    throw new Error( "Innovation not found" );
  }


  let navItemAll = innovationAll.map( innovation => ( {
    path: innovation.path,
    name: innovation.innovationName,
    anchor: innovation.path,
    version: innovation.version
    // version: new Version( innovation.version ).preReleaseName
  } ) );



  let contentNavLinkDataAll = navItemAll.map( ( { name, path, anchor, version }, index ) => ( {
    name,
    path: RouterUtils.whatIsNewRoutes.getWhatIsNewRoute({
      version:routerStore.pageName,
      innovation: anchor
    }),
    isActive: hasPageNavLinkActive( contentSection.currentSectionId, anchor ),
    disabled: !versionFilter.isCheckedByVersion( version ),
    activeClassName: "app-driver__link_page-nav-item_active"
  } ) );



  return (
    <AppDriver>
      <AppNavSectionAppDriver/>
      <ContentNavSectionAppDriver contentNavLinkDataAll={contentNavLinkDataAll}/>
      <FooterAppDriver/>
    </AppDriver>
  );
} );
