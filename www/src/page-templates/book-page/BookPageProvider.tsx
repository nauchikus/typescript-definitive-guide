import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { createBookChapterPageMobxEntry, UseBookPageStores, MobxBookChapterPageContext } from "../../stores/mobx-entry__book";
import { IPageNavLeaf, IPageNavNode } from "../../types/IPageNavData";
import { AppLocalization } from "../../localization";
import { IBookChapterPageContentData } from "../../../plugins/gatsby-pages/create-book-page";
import { Localization } from "../../react__hooks/translator.hook";
import { BehaviorNotification as CustomNotification } from "../../components/notification__behavior-notification/BehaviorNotification";
import BookPage from "./BookPage";
import { ContentDownPanelStoreContext } from "../../mobx__mobx-shared-store__react-context/ContentDownPanelStoreMobxContext";
import { ContentNavStoreContext } from "../../mobx__mobx-shared-store__react-context/ContentNavStoreMobxContext";
import { BookChapterPageContentDataContext } from "../../react__context/BookChapterPageContentDataContext";
import { ContentIntersectionObserverStoreContext } from "../../react__context/ContentIntersectionObserverStoreContext";
import { RouterStoreContext } from "../../stores/RouterStore";


export interface IBookChapterPageNavData extends IPageNavNode<IPageNavLeaf>{

}

interface IBookPageProviderProps {
  pageContext: {
    locale: Locales;
    localization: AppLocalization;
    pageContentData: IBookChapterPageContentData;
    pageNavDataAll: IBookChapterPageNavData[];
  };
  location: Location;
}

const BookPageProvider: FC<IBookPageProviderProps> = ( { pageContext,location } ) => {
  let { locale, pageContentData,pageNavDataAll,localization } = pageContext;
  let bcMobxRef = useRef<UseBookPageStores>( createBookChapterPageMobxEntry( {
    location,
    pageNavDataAll
  } ) );


  return (
    <MobxBookChapterPageContext.Provider value={bcMobxRef.current}>
      <BehaviorNotificationContext.Provider value={bcMobxRef.current.behaviorNotificationStore}>
        <Localization.Provider value={localization}>
          <ContentNavStoreContext.Provider value={bcMobxRef.current.contentNav}>
            <ContentDownPanelStoreContext.Provider value={bcMobxRef.current.contentDownPanelStore}>
              <RouterStoreContext.Provider value={bcMobxRef.current.router}>
                <BaseLayout>
                  <SEO/>
                  <ContentIntersectionObserverStoreContext.Provider value={bcMobxRef.current.contentIntersectionObserver}>
                    <BookChapterPageContentDataContext.Provider value={pageContentData}>
                      <BookPage/>
                      <CustomNotification/>
                    </BookChapterPageContentDataContext.Provider>
                  </ContentIntersectionObserverStoreContext.Provider>
                </BaseLayout>
              </RouterStoreContext.Provider>
            </ContentDownPanelStoreContext.Provider>
          </ContentNavStoreContext.Provider>
        </Localization.Provider>
      </BehaviorNotificationContext.Provider>
    </MobxBookChapterPageContext.Provider>
  )

};

export default BookPageProvider