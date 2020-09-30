import React, { FC, ReactNode, useState } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { default as cn } from "classnames";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { Link } from "gatsby";
import { observer } from "mobx-react-lite";
import { AppNavSectionAppDriver } from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import { useVersionInfo } from "../../react__hooks/useVersionInfo";
import { useTranslator } from "../../react__hooks/translator.hook";
import {
  AppNavigationLocalization,
  IndexPageGuiLocalization,
  LocalizationPaths, PdfPageGuiLocalization, PdfPageLocalization,
  PdfSharedLocalization
} from "../../localization";
import { useWelcomeDescriptionIndex } from "../../react__hooks/use-welcome-description-index";
import { AppNavId } from "../../enums/AppNavId";
import { DownloadPdfButton } from "../button__download-pdf/DownloadPdfButton";
import { If } from "../if-operator/If";

interface IIndexPageContentProps {
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

const getYandexDonateForm = () =>(`
<iframe src="https://promo-money.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D1%83%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%20%D0%B2%20%D0%B0%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=https%3A%2F%2Fnauchikus.github.io%2Ftypescript-definitive-guide%2Fpdf%2F&quickpay=shop&account=410016532024848" width="100%" height="250" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
`)

export const PdfPageContent: FC<IIndexPageContentProps> = observer( ({} ) => {
  let [pdfShared, pdfPage] = useTranslator<[
    PdfSharedLocalization,
    PdfPageGuiLocalization
  ]>( LocalizationPaths.PdfShared, LocalizationPaths.PdfPageGui );

  let [isPlaceholder, setIsPlaceholder] = useState(true);


  return (
    <div className="pdf__content-layout content-layout">
      <div className="pdf__card_download-pdf">
        <h1 className="pdf__title">{pdfPage.title}</h1>

        <div className="pdf__donate">
          <If condition={isPlaceholder}>
            <p className="pdf__load-donate">Загрузка</p>
          </If>
          <iframe
            className="pdf__iframe_donate-form"
            src="https://promo-money.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D1%83%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%20%D0%B2%20%D0%B0%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8&targets-hint=&default-sum=100&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=https%3A%2F%2Fnauchikus.github.io%2Ftypescript-definitive-guide%2Fpdf%2F&quickpay=shop&account=410016532024848"
            width="100%"
            height="250"
            frameBorder="0"
            allowtransparency="true"
            scrolling="no"
            onLoad={()=> setIsPlaceholder(false)}></iframe>
        </div>
        <DownloadPdfButton/>
      </div>
    </div>
  );
} );

