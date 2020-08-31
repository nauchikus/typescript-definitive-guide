import React, { FC } from "react";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { DonateButton } from "../donate-button/DonateButton";
import { BrickwallSvgIcon, DonateSvgIcon, ForwardArrowSvgIcon } from "../icon__svg-icon/svg-icons";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { GatsbyImage } from "../image";
import { Dropdown } from "../dropdown/Dropdown";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, SharedLayoutLocalization } from "../../localization";


interface IDonateDropdownProps {
}

export const DonateDropdown: FC<IDonateDropdownProps> = ( {} ) => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: {donateDropdown} } = shared;


  return (
    <Dropdown className="donate-dropdown">
      <DropdownToggle className="donate-dropdown__toggle">
        <DonateButton>
          <DonateSvgIcon/>
          <div className="donate-button__label">
            <span>{donateDropdown.toggleButton.label[0]}</span>
            <span>{donateDropdown.toggleButton.label[1]}</span>
          </div>
        </DonateButton>
      </DropdownToggle>
      <DropdownMenu className="donate-dropdown__menu"
                    openClassName="donate-dropdown__menu_open"
                    closeClassName="donate-dropdown__menu_close">
        <div className="donate__dropdown-menu">
          <div className="native-scrollbar_small donate-dropdown-menu__native-scrollbar">
            <div className="donate-dropdown-menu">
              <div className="donate-svg-icon__wrapper">
                <BrickwallSvgIcon className="donate-dropdown-menu__svg-icon"/>
              </div>
              <p className="donate-dropdown-menu__title">{donateDropdown.content.title}</p>
              <p className="donate-dropdown-menu__subtitle" dangerouslySetInnerHTML={donateDropdown.content.subtitle}></p>
              <div className="donate-dropdown-menu__control">
                <a href={donateDropdown.href} className="link-button donate-link-button_yandex">
                  <GatsbyImage className="donate-button__png-icon__yandex-money"
                               path="icon__image/yandex-money.png"/>
                  <ForwardArrowSvgIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};