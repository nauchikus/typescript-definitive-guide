import "./index.page.scss";

import React from "react"
import {FC} from "react"
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";
import { AppNavigationLocalization, IndexPageGuiLocalization, LocalizationPaths } from "../../localization";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavId } from "../../enums/AppNavId";
import { useWelcomeDescriptionIndex } from "../../react__hooks/use-welcome-description-index";
import { useVersionInfo } from "../../react__hooks/useVersionInfo";


interface IIndexPageProps {
}

const appToIndexPageNav = ( appNav: AppNavigationLocalization ) => [
  appNav.find( i => i.id === AppNavId.BookContents ),
  appNav.find( i => i.id === AppNavId.WhatIsNewContents ),
];

function indexNavAssert(indexNavAll:Partial<AppNavigationLocalization>):asserts indexNavAll is Required<AppNavigationLocalization>{
  if ( indexNavAll.some( item => !item ) ) {
    let navItemNames = indexNavAll.filter( i => i ).map( i => i?.name ).join( `, ` );

    throw new Error( `Index page nav is not valid. Current nav item names [${ navItemNames }].` );

  }
}

const IndexPage: FC<IIndexPageProps> = observer(( {  } ) => {
  let versionInfo = useVersionInfo();
  let [appNavigation,{appDescription,subtitleAll}] = useTranslator<[
    AppNavigationLocalization,
    IndexPageGuiLocalization
  ]>( LocalizationPaths.AppNavigation, LocalizationPaths.IndexPageGui );

  let indexNavAll = appToIndexPageNav( appNavigation );
  let subtitleIndex = useWelcomeDescriptionIndex( subtitleAll.length );

  indexNavAssert( indexNavAll );

  let nav = indexNavAll.map( navItem => (
    <Link className="link ip-nav-link" key={ navItem.path } to={ navItem.path }>{ navItem.name }</Link>
  ) );



  return (
    <>
      <div className="page-without-driver__content-layout">
        <div className="ip-title_container">
          <span className="ip-subtitle">{subtitleAll[subtitleIndex]}</span>
          <div className="ip-main-informer">
            <h1 className="ip-title_name">
              TypeScript Definitive Guide
            </h1>
            <div className="ip-title_version">
              <span className="ip-title_version-mmp">
                {versionInfo.mmp}
              </span>
              <span className="ip-title_version-release-name">
                {versionInfo.preReleaseName}
              </span>
            </div>
          </div>
        </div>
        <p className="ip-app-description">
          {appDescription}
        </p>
        <nav className="ip-nav">
          {nav}
        </nav>
      </div>
    </>
  );
});

export default IndexPage;
