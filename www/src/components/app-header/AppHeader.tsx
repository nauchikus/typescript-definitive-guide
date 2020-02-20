import React, { FC, ReactElement } from "react";
import { Search } from "../search/Search";
import { useShareStores } from "../../mobx";
import { observer } from "mobx-react-lite";
import { useRouter } from "../../react__hooks/router-hook";
import { If } from "../if-operator/If";
import {
  NavToggleButton,
} from "../app-menu-buttons/app-menu-buttons";
import { DonateDropdown } from "../donate-dropdown/DonateDropdown";
import { AppBar } from "../app-bar/AppBar";
import { DonateButton } from "../donate-button/DonateButton";


interface IAppHeaderProps {
}

export const AppHeader: FC<IAppHeaderProps> = observer(( {...props} ) => {
  let { appSearch } = useShareStores();
  let router = useRouter();


  return (
    <header className="app-header app-header-grid" app-search-toggle={appSearch.active.state}>
      <div className="app-header-grid-item__nav-toggle">
        <If condition={ !router.isIndexPage }>
          <NavToggleButton/>
        </If>
      </div>
      <div className="app-header-grid-item__logo">
        <div className="app-logo"></div>
      </div>
      <div className="app-header-grid-item__informer">
      </div>
      <div className="app-header-grid-item__search">
        <Search/>
      </div>
      <div className="app-header-grid-item__menu">
        <AppBar/>
      </div>
    </header>
  );
});