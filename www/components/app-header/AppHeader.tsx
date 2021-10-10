import React, { FC, ReactElement } from "react";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import {AppDriverToggleButton} from "../buttons/app-driver-toggle-button/AppDriverToggleButton";
import {AppNav} from "../app-nav/AppNav";
import {AppLinkBar} from "../app-link-bar/AppLinkNav";
import {Search} from "../search/Search";
import {AppLogo} from "../app-logo/AppLogo";
import {Head} from "next/document";


interface IAppHeaderProps {
}

export const AppHeader: FC<IAppHeaderProps> = observer(( {...props} ) => {
  return (
    <header className="app-header app-header-grid">

        <div className="app-header-grid-item__driver-toggle">
            <AppDriverToggleButton/>
        </div>

        <div className="app-header-grid-item__logo">
            <AppLogo/>
        </div>

        <div className="app-header-grid-item__search">
            <Search key="app-search" />
        </div>

        <div className="app-header-grid-item__secondary-bar">
            <AppLinkBar/>
        </div>

        <div className="app-header-grid-item__primary-bar">
            <AppNav/>
        </div>

    </header>
  );
});

