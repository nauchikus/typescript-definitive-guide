import "./not-found.page.scss";

import React, { FC } from "react";
import { default as cn } from "classnames";
import { useTranslator } from "../../react__hooks/translator.hook";
import {
  AppNavigationLocalization,
  LocalizationPaths,
  NotFoundPageGuiLocalization
} from "../../localization";
import { Link } from "gatsby";
import { useRouter } from "../../stores/RouterStore";
import { If } from "../../components/if-operator/If";

interface INotFoundPageProps {
}

export const NotFoundPage: FC<INotFoundPageProps> = ( {} ) => {
  let [appNavigation,{notFound_404}] = useTranslator<[
    AppNavigationLocalization,
    NotFoundPageGuiLocalization
  ]>( LocalizationPaths.AppNavigation, LocalizationPaths.NotFoundPageGui );
  let router = useRouter();

  let backButtonClasses = cn({
    [`back-button_disabled`]: router.isBack
  })

  return (
    <div className="not-found-page">
      <p className="info">
        <p>Скорее всего вы попали на эту страницу из-за того что браузер загрузил старую версию приложения</p>
        <p>Для устранения проблемы необходимо очистить кеш браузера либо прибегнуть к <i>жесткой перезагрузке</i> с помощью комбинации <code>alt + shift + R</code></p>
      </p>
      <h1 className="nfp-title">{notFound_404.status}</h1>
      <h2 className="nfp-subtitle">{notFound_404.title}</h2>
      <div className="nf-control-bar nf-control-bar__item">
        <button className="gp-back-button"
                onClick={() => router.goBack()}
                disabled={router.isBack}>
          Вернутся назад
        </button>
        <button className="go-home-button nf-control-bar__item"
                onClick={()=>router.goHome()}>
          На главную
        </button>
      </div>
    </div>
  );
};
