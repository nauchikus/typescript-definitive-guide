import React, { useEffect, useLayoutEffect } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import SEO from "../../components/seo";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { BehaviorNotificationContext } from "../../react__context/BehaviorNotificationContext";
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
import { RouterStoreContext, useRouter } from "../../stores/RouterStore";
import { BookPageMobxEntry, MobxBookChapterPageContext } from "../../mobx__entry/BookPageMobxEntry";
import { useNativeLinkDisableDefaultBehavior } from "../../react__hooks/useNativeLinkDisableDefaultBehavior";
import ErrorBoundary from "../../components/error-boundary/ErrorBoundary";
import { useLocalStore } from "mobx-react-lite";
import { useRouterUpdater } from "../../react__hooks/useRouterUpdater";


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
  let mobxEntry = BookPageMobxEntry.getInstance({ locale, location, pageNavDataAll });


  let {router} = mobxEntry;

  useRouterUpdater(location, router);

  // useLayoutEffect(() => {
  //   router.setLocation(location);
  //   router.scrollToAnchor(router.anchor);
  //
  //   return () => router.reset();
  // }, [location.hash]);


  return (
    <ErrorBoundary>
      <MobxBookChapterPageContext.Provider value={mobxEntry}>
        <BehaviorNotificationContext.Provider value={mobxEntry.behaviorNotificationStore}>
          <Localization.Provider value={localization}>
            <ContentNavStoreContext.Provider value={mobxEntry.contentNav}>
              <ContentDownPanelStoreContext.Provider value={mobxEntry.contentDownPanelStore}>
                <RouterStoreContext.Provider value={router}>
                  <BaseLayout>
                    <SEO/>
                    <ContentIntersectionObserverStoreContext.Provider value={mobxEntry.contentIntersectionObserver}>
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
    </ErrorBoundary>
  )

};

export default BookPageProvider
