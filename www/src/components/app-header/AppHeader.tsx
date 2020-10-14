import React, { FC, ReactElement } from "react";
import { Search } from "../search/Search";
import { observer } from "mobx-react-lite";
import {
  NavToggleButton,
} from "../app-menu-buttons/app-menu-buttons";
import { AppBar } from "../app-bar/AppBar";
import { AppLogoSvgIcon } from "../icon__svg-icon/svg-icons";
import { Link } from "gatsby";
import { RouterUtils } from "../../utils/router-utils";
import { useDocsearch } from "../../react__hooks/useDocsearch";


interface IAppHeaderProps {
}

export const AppHeader: FC<IAppHeaderProps> = observer(( {...props} ) => {
  useDocsearch();


  return (
    <header className="app-header app-header-grid">
      <div className="app-header-grid-item__nav-toggle">
        <NavToggleButton/>
      </div>
      <div className="app-header-grid-item__logo">
        <Link to={RouterUtils.appRoutes.getIndexRoute({})}>
          <AppLogoSvgIcon className="app-logo__svg-icon" />
        </Link>
      </div>
      <div className="app-header-grid-item__informer">
      </div>
      <div className="app-header-grid-item__search">
        <Search key="app-search" />
      </div>
      <div className="app-header-grid-item__menu">
        <AppBar/>
      </div>
    </header>
  );
});

