import "./not-found.page.scss";

import React, { FC } from "react";
import { useTranslator } from "../../react__hooks/translator.hook";
import {
  AppNavigationLocalization,
  LocalizationPaths,
  NotFoundPageGuiLocalization
} from "../../localization";

interface INotFoundPageProps {
}

export const NotFoundPage: FC<INotFoundPageProps> = ( {} ) => {
  let [appNavigation,{notFound_404}] = useTranslator<[
    AppNavigationLocalization,
    NotFoundPageGuiLocalization
  ]>( LocalizationPaths.AppNavigation, LocalizationPaths.NotFoundPageGui );


  return (
    <div className="not-found-page">
      <h1 className="nfp-title">{notFound_404.status}</h1>
      <h2 className="nfp-subtitle">{notFound_404.title}</h2>
    </div>
  );
};