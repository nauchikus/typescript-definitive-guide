import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";
import { AppNavSectionAppDriver } from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import { useVersionInfo } from "../../react__hooks/useVersionInfo";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, IndexPageGuiLocalization, LocalizationPaths } from "../../localization";
import { useWelcomeDescriptionIndex } from "../../react__hooks/use-welcome-description-index";
import { AppNavId } from "../../enums/AppNavId";

interface IIndexPageContentProps {
}

const appToIndexPageNav = ( appNav: AppNavigationLocalization ) => [
  appNav.find( i => i.id === AppNavId.BookContents ),
  appNav.find( i => i.id === AppNavId.WhatIsNewContents ),
  appNav.find( i => i.id === AppNavId.Pdf ),
];

function indexNavAssert(indexNavAll:Partial<AppNavigationLocalization>):asserts indexNavAll is Required<AppNavigationLocalization>{
  if ( indexNavAll.some( item => !item ) ) {
    let navItemNames = indexNavAll.filter( i => i ).map( i => i?.name ).join( `, ` );

    throw new Error( `Index page nav is not valid. Current nav item names [${ navItemNames }].` );

  }
}



export const IndexPageContent: FC<IIndexPageContentProps> = observer( ({} ) => {
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
  );
} );
