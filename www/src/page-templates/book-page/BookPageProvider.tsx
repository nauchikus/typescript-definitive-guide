import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
import { createBookChapterMobxEntry, UseBookStores, MobxBookChapterContext } from "../../stores/mobx-entry__book";
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
  let bookChapterStoresRef = useRef<UseBookStores>( createBookChapterMobxEntry( {
    location,
    pageNavDataAll
  } ) );


  return (
    <MobxBookChapterContext.Provider value={bookChapterStoresRef.current}>
      <BehaviorNotificationContext.Provider value={bookChapterStoresRef.current.behaviorNotificationStore}>
        <Localization.Provider value={localization}>
          <ContentNavStoreContext.Provider value={bookChapterStoresRef.current.contentNav}>
            <ContentDownPanelStoreContext.Provider value={bookChapterStoresRef.current.contentDownPanelStore}>
              <RouterStoreContext.Provider value={bookChapterStoresRef.current.router}>
                <BaseLayout>
                  <SEO/>
                  <ContentIntersectionObserverStoreContext.Provider value={bookChapterStoresRef.current.contentIntersectionObserver}>
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
    </MobxBookChapterContext.Provider>
  )

};

export default BookPageProvider