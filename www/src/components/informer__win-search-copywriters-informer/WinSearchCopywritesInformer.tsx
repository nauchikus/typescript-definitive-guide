import React, { FC } from "react";
import { LinkButton } from "../button__link-button/LinkButton";
import {
  AttentionInformerCssIcon
} from "../icon__css-icon__informer-content-icon/informer-content-icons";


interface IWinSearchCopywritesInformerProps {
}

export const WinSearchCopywritesInformer: FC<IWinSearchCopywritesInformerProps> = ( {} ) => {
  return (
    <div className="win-search-copywrites-informer">
      <div className="win-search-copywrites__informer_text-wrapper">
        <AttentionInformerCssIcon/>
        <p className="win-search-copywrites-informer__textfield">
        <span className="win-search-copywrites-informer__text">
          Разделу <i>"Что нового?"</i> требуется помощники по адаптации англоязычного контента. Хочешь стать одним из них?
        </span>
        </p>
      </div>
      <LinkButton className="win-search-copywrites-informer__link-button" href="#">
        Подробнее...
      </LinkButton>
    </div>
  );
};