import React, { FC, ReactNode } from "react";
import { AppDriver } from "../app-driver/AppDriver";
import { useTranslator } from "../../react__hooks/translator.hook";
import { AppNavigationLocalization, LocalizationPaths } from "../../localization";
import { PageWithContentNavAppDriver } from "../app-driver__nav_page-with-content/PageWithContentNavAppDriver";
import { FooterAppDriver } from "../app-driver__footer/FooterAppDriver";
import { useBookChapterStores } from "../../stores/mobx-entry__book";
import { IPageNavSection } from "../../types/IPageNavData";
import { observer } from "mobx-react-lite";
import { useRouter } from "../../stores/RouterStore";
import { AppNavSectionAppDriver } from "../app-driver__nav-section_app-nav/AppNavSectionAppDriver";
import { ContentNavSectionAppDriver } from "../app-driver__nav-section_page-nav/ContentNavSectionAppDriver";

interface IBookChapterPageAppDriverProps {
}


export const BookChapterPageAppDriver: FC<IBookChapterPageAppDriverProps> = observer( ( {} ) => {
  let router = useRouter();
  let { contentSection, contentNav } = useBookChapterStores();


  const hasPageNavLinkActive = ( href: string, anchor: string ) =>
    anchor === contentSection.currentSectionId;


  // if ( !innovationAll ) {
  //   throw new Error( "Innovation not found" );
  // }


  ///TODO:[refactoring][remove][(remove first map)]
  let contentNavLinkDataAll = contentNav.sectionAll
    // .map( (section:IPageNavSection) => ( {
    //   path: `${ router.pathname }#${ section.path }`,
    //   name: section.name,
    //   anchor: section.path
    // } ) )
    .map( ( section: IPageNavSection ) => ( {
      name: section.name,
      path: `${ router.pathname }#${ section.path }`,
      isActive: hasPageNavLinkActive( "", section.path ),
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
