import React, { useRef } from "react";
import {FC} from "react"
import { Locales } from "../../../plugins/types/locales";
import SEO from "../../components/seo";
import { Localization } from "../../react__hooks/translator.hook";
import BaseLayout from "../../layouts/base-layout/BaseLayout";
import { AppLocalization } from "../../localization";
import { NotFoundPage } from "./NotFoundPage";
import { RouterStoreContext } from "../../stores/RouterStore";
import { createNotFoundPageMobxEntry, UseNotFoundPageMobxStores } from "../../stores/mobx-entry__not-found";
import { NotFoundPageMobxEntry } from "../../stores/NotFoundPageMobxEntry";


interface INotFoundPageProviderProps {
    pageContext:{
        locale: Locales;
        localization: AppLocalization;
    };
    location: Location;
}

const NotFoundPageProvider: FC<INotFoundPageProviderProps> = ( { pageContext,location } ) => {
  let { locale, localization } = pageContext;
  let { pages,...appSharedLocalization } = localization;
  let mobxRef = NotFoundPageMobxEntry.getInstance({ locale, location });

  return (
    <Localization.Provider value={ localization }>
      <RouterStoreContext.Provider value={mobxRef.router}>
        <BaseLayout>
          <SEO {...appSharedLocalization}/>
          <NotFoundPage/>
        </BaseLayout>
      </RouterStoreContext.Provider>
    </Localization.Provider>
  );
};

export default NotFoundPageProvider
