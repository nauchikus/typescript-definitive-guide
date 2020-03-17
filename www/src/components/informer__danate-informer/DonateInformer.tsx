import React, { FC } from "react";
import { default as cn} from "classnames";
import { BrickwallSvgIcon, ForwardArrowSvgIcon } from "../icon__svg-icon/svg-icons";
import { GatsbyImage } from "../image";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, SharedLayoutLocalization } from "../../localization";
import { DynamicGatsbyImage } from "../dynamic-gatsby-image/DynamicGatsbyImage";
import { observer } from "mobx-react-lite";
import { useBaseLayoutStores } from "../../mobx__react-content-provider/BaseLayoutMobxProvider";
import { QuestionInformerCssIcon } from "../icon__css-icon__informer-content-icon/informer-content-icons";

interface IDonateInformerProps {
}

export const DonateInformer: FC<IDonateInformerProps> = observer( ( {} ) => {
  let {informerRotator} = useBaseLayoutStores();
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { informers:{donateInformer} } = shared;


  return (
    <div className="donate-informer" state={ informerRotator.currentInformerState }>

      <div className="donate-informer__first-frame frame_first">
        <QuestionInformerCssIcon/>
        <div className="donate-informer__main">
          <span className="donate-informer__title">
            <span>{donateInformer.minBanner.label}</span>
          </span>
          <div className="donate-informer__control-bar">
            <button className="donate-informer__button_yes"
                    onClick={ () => informerRotator.activateMaximumStateBannerСurrentInformer() }>
              {donateInformer.minBanner.buttons.yes}
            </button>
            <button className="donate-informer__button_no"
                    onClick={ () => informerRotator.closeCurrentInformer() }>
              {donateInformer.minBanner.buttons.no}
            </button>
          </div>
        </div>
      </div>

      <div className="donate-informer__second-frame second-frame-grid frame_second">

        <div className="second-frame-grid-item__img">

          <DynamicGatsbyImage className="donate-main-informer__img"
                              relativePath="icon__image/brickwall.png"
                              alt="изображение"/>
        </div>

        <div className="second-frame-grid-item__text">
          <div className="donate-main-informer__text_container">
            <p className="donate-main-informer__subtitle">
              <span className="donate-main-informer__textfield_main-text"
                    dangerouslySetInnerHTML={donateInformer.maxBanner.html}></span>
            </p>
          </div>
        </div>

        <div className="second-frame-grid-item__control">
          <a href={ donateInformer.maxBanner.href } className="link-button donate-main-informer__donate-link-button_yandex">
            <GatsbyImage className="donate-button__png-icon__yandex-money"
                         path="icon__image/yandex-money.png"/>
            <ForwardArrowSvgIcon/>
          </a>
        </div>

      </div>

    </div>
  );
} );