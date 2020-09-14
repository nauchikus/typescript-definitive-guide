import "./pdf.page.scss";

import React from "react"
import {FC} from "react"
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";
import { AppNavigationLocalization, IndexPageGuiLocalization, LocalizationPaths } from "../../localization";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavId } from "../../enums/AppNavId";
import { useWelcomeDescriptionIndex } from "../../react__hooks/use-welcome-description-index";
import { useVersionInfo } from "../../react__hooks/useVersionInfo";
import SliderSecondSpaceLayout from "../../layouts/slider-second-space-layout/SliderSecondSpaceLayout";
import { NoContentAppDriver } from "../../components/app-driver__no-content-driver/NoContentAppDriver";
import { PdfPageContent } from "../../components/page__pdf-page__content/PdfPageContent";


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



const PdfPage: FC<IIndexPageProps> = observer(({  } ) => {
  let [appNavigation,{appDescription,subtitleAll}] = useTranslator<[
    AppNavigationLocalization,
    IndexPageGuiLocalization
  ]>( LocalizationPaths.AppNavigation, LocalizationPaths.IndexPageGui );


  return (
    <SliderSecondSpaceLayout
      driver={ <NoContentAppDriver/> }
      content={<PdfPageContent/>}
    />
  );
});

export default PdfPage;
