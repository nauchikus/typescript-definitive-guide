import { AdaptiveButton } from "../adaptive-button/AdaptiveButton";
import { ScaleButtonContainer, ScaleButtonProvider } from "../scale-button/ScaleButton";
import { GithubSvgIcon, PdfSvgIcon, TelegramSvgIcon } from "../svg-icon/svg-icons";
import React, { FC } from "react";

interface IAppMenuButtonProps {
}

export const PdfAppMenuButton: FC<IAppMenuButtonProps> = () => (
  <ScaleButtonProvider>
    <AdaptiveButton className="app-menu-item__item">
      <ScaleButtonContainer>
        <PdfSvgIcon/>
      </ScaleButtonContainer>
      <div className="adaptive-button__label">
                <span>Скачать PDF версию</span>
              </div>
    </AdaptiveButton>
  </ScaleButtonProvider>
);
export const TelegramAppMenuButton: FC<IAppMenuButtonProps> = () => (
  <ScaleButtonProvider>
    <AdaptiveButton className="app-menu-item__item">
      <ScaleButtonContainer>
        <TelegramSvgIcon/>
      </ScaleButtonContainer>
      <div className="adaptive-button__label">
                <span>Следить за изменениями в</span>
                <span>Telegram</span>
              </div>
    </AdaptiveButton>
  </ScaleButtonProvider>
);
export const GithubAppMenuButton: FC<IAppMenuButtonProps> = () => (
  <ScaleButtonProvider>
    <AdaptiveButton className="app-menu-item__item">
      <ScaleButtonContainer>
        <GithubSvgIcon/>
      </ScaleButtonContainer>
      <div className="adaptive-button__label">
                <span>Посетить проект на</span>
                <span>Github</span>
              </div>
    </AdaptiveButton>
  </ScaleButtonProvider>
);