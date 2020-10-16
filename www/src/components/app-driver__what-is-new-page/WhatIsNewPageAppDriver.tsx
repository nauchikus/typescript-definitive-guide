import React, { FC } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";
import { useRouter } from "../../stores/RouterStore";
import { AppNavSectionAppDriver } from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import { ContentNavSectionAppDriver } from "../app-driver__nav-section_page-nav/ContentNavSectionAppDriver";
import { useAppDriverNav, useWhatIsNewPageStores } from "../../mobx__entry/WinPageMobxEntry";

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
  let appDriverNav = useAppDriverNav();


  if (!appDriverNav.driverNavLinkDataAll) {
    throw new Error(`driverNavLinkDataAll not cannot have undefined.`);
  }


  return (
    <AppDriver>
      <AppNavSectionAppDriver/>
      <ContentNavSectionAppDriver contentNavLinkDataAll={appDriverNav.driverNavLinkDataAll}/>
      <FooterAppDriver/>
    </AppDriver>
  );
} );
