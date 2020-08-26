import { AdaptiveMenuButtonLink } from "../adaptive-menu-button-link/AdaptiveMenuButtonLink";
import { ScaleContainer, ScaleContainerProvider } from "../transform__scale-container/ScaleContainer";
import { GithubSvgIcon, PdfSvgIcon, TelegramSvgIcon } from "../icon__svg-icon/svg-icons";
import React, { FC } from "react";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { MainNavAnimatedCssIcon } from "../main-nav-animated-css-icon/MainNavAnimatedCssIcon";
import { IconButton } from "../icon-button/IconButton";
import { If } from "../if-operator/If";
import { observer } from "mobx-react-lite";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, SharedLayoutLocalization } from "../../localization";
import { useAppDriver } from "../../stores/SharedPageMobxEntry";

interface IAppMenuButtonProps {
}

export const NavToggleButton: FC<IAppMenuButtonProps> = observer(() => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let appDriver = useAppDriver();

  let { appHeader: { navToggleButton: { tooltips } } } = shared;


  return (
    <IconButton onClick={ () => appDriver.toggle() }>
      <MainNavAnimatedCssIcon state={ appDriver.invertState }/>
      <Tooltip className="tooltip_pdf" position={TooltipPosition.BottomLeft}>
        <If condition={appDriver.isClose}>
          <p>{tooltips.open[0]}</p>
          <p>{tooltips.open[1]}</p>
        </If>
        <If condition={appDriver.isOpen}>
          <p>{tooltips.close[0]}</p>
          <p>{tooltips.close[1]}</p>
        </If>
      </Tooltip>
    </IconButton>
  );
});

export const PdfAppMenuButton: FC<IAppMenuButtonProps> = () => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: { appMenu:{pdfButton} } } = shared;

  return (
    <ScaleContainerProvider>
      <AdaptiveMenuButtonLink className="app-menu-item__item" href={pdfButton.href}>
        <ScaleContainer>
          <PdfSvgIcon/>
        </ScaleContainer>
        <Tooltip className="tooltip_pdf" position={ TooltipPosition.BottomCenter }>
          <p>{pdfButton.tooltip[0]}</p>
          <p>{pdfButton.tooltip[1]}</p>
        </Tooltip>
        <div className="adaptive-menu-button-link__label">
          <span>{pdfButton.label}</span>
        </div>
      </AdaptiveMenuButtonLink>
    </ScaleContainerProvider>
  );
};
export const TelegramAppMenuButton: FC<IAppMenuButtonProps> = () => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: {appMenu:{telegramButton}} } = shared;

  return (
    <ScaleContainerProvider>
      <AdaptiveMenuButtonLink className="app-menu-item__item"
                              href={telegramButton.href}
                              target="_blank">
        <ScaleContainer>
          <TelegramSvgIcon/>
        </ScaleContainer>
        <Tooltip className="tooltip_telegram" position={ TooltipPosition.BottomCenter }>
          <p>{telegramButton.tooltip[0]}</p>
          <p>{telegramButton.tooltip[1]}</p>
          <p>{telegramButton.tooltip[2]}</p>
        </Tooltip>
        <div className="adaptive-menu-button-link__label">
          <span>{telegramButton.label}</span>
        </div>
      </AdaptiveMenuButtonLink>
    </ScaleContainerProvider>
  );
};
export const GithubAppMenuButton: FC<IAppMenuButtonProps> = () => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: {appMenu:{githubButton}} } = shared;

  return (
    <ScaleContainerProvider>
      <AdaptiveMenuButtonLink className="app-menu-item__item"
                              href={githubButton.href}
                              target="_blank">
        <ScaleContainer>
          <GithubSvgIcon/>
        </ScaleContainer>
        <Tooltip className="tooltip_github" position={ TooltipPosition.BottomRight }>
          <p>{githubButton.tooltip[0]}</p>
          <p>{githubButton.tooltip[1]}</p>
        </Tooltip>
        <div className="adaptive-menu-button-link__label">
          <span>{githubButton.label}</span>
        </div>
      </AdaptiveMenuButtonLink>
    </ScaleContainerProvider>
  );
};
