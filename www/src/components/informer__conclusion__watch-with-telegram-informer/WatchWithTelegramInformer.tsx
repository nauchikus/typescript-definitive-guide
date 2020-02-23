import React, { FC } from "react";
import { TelegramSvgIcon } from "../icon__svg-icon/svg-icons";
import { useTranslator } from "../../react__hooks/translator.hook";
import {
  AppNavigationLocalization,
  InformersLocalization,
  LinksLocalization,
  LocalizationPaths
} from "../../localization";
import { DynamicGatsbyImage } from "../dynamic-gatsby-image/DynamicGatsbyImage";


interface IWatchWithTelegramInformerProps {
}

export const WatchWithTelegramInformer:FC<IWatchWithTelegramInformerProps>=()=>{
  let [informers, links] = useTranslator<[InformersLocalization, LinksLocalization]>(
    LocalizationPaths.Informers,
    LocalizationPaths.Links
  );

  let [primaryText, secondaryText] = informers.watchWithTelegramInformer.text;

  secondaryText = secondaryText
    .replace( /Telegram/, `<span class="wwt__text_telegram-name">Telegram</span>` );

  return (
    <div className="informer__watch-with-telegram">
      <DynamicGatsbyImage className="wwt__bg-image"
                          relativePath="images/informers/watch-with-telegram__background.png"
                          alt="background"/>
      <div className="watch-with-telegram-informer__text_container">
        <p className="watch-with-telegram-informer__text_primary">
          { primaryText }
        </p>
        <p className="watch-with-telegram-informer__text_secondary" dangerouslySetInnerHTML={{__html:secondaryText}}>
        </p>
      </div>
      <div className="watch-with-telegram-informer__subscribe-button_container">
        <a className="watch-with-telegram-informer__subscribe-button" href={ links.telegram }>
          { informers.watchWithTelegramInformer.subscribeButton.label }
        </a>
      </div>
    </div>
  );
}