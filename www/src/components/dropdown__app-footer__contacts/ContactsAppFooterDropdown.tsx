import React, { FC, ReactElement } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { IconButton, Size } from "../icon-button/IconButton";
import { ArrowDropdownSvgIcon, FilterListSvgIcon } from "../icon__svg-icon/svg-icons";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { YandexMailImageIcon } from "../icon__image-icon/image-icons";
import { ContactsToggleButton } from "../button__dropdown-toggle__contacts-toggle-button/ContactsToggleButton";

interface IContactsAppFooterDropdownProps {
}

export const ContactsAppFooterDropdown:FC<IContactsAppFooterDropdownProps>=( {})=>{
  return(
    <Dropdown className="contacts-dropdown">
      <DropdownToggle>
        <ContactsToggleButton/>
      </DropdownToggle>
      <DropdownMenu className="contacts-dropdown__menu content__control-bar-dropdown-item"
                    openClassName="contacts-dropdown__menu_open-state"
                    closeClassName="contacts-dropdown__menu_close-state">
        <header className="contacts-dropdown-menu__header">
          <span>Контакты</span>
        </header>
        <address className="contacts-dropdown-menu__main">
          <div className="app-footer__address-item">
            <YandexMailImageIcon className="address__icon_ya-mail"/>
            <a className="contacts__link_ya-mail" href="mailto:nauchikus@yandex.ru">nauchikus@yandex.ru</a>
            <div className="address-item__icon">
            </div>
            <div className="address-item__link">
            </div>
          </div>
        </address>
      </DropdownMenu>
    </Dropdown>
  );
}