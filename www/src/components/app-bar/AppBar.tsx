import React, { FC, ReactElement } from "react";
import { Search } from "../search/Search";
import {
  BrickwallSvgIcon,
  DonateSvgIcon,
  GithubSvgIcon,
  TelegramSvgIcon,
  ForwardArrowSvgIcon,
} from "../svg-icon/svg-icons";
import { IconButton } from "../icon-button/IconButton";
import { MainNavAnimatedCssIcon } from "../main-nav-animated-css-icon/MainNavAnimatedCssIcon";
import { useStores } from "../../mobx";
import { observer } from "mobx-react-lite";
import { Link } from "gatsby";
import { MenuAnimatedCssIcon } from "../menu-animated-css-icon/MenuAnimatedCssIcon";
import { useRouter } from "../../react-hooks/router-hook";
import { If } from "../if-operator/If";
import { AdaptiveButton } from "../adaptive-button/AdaptiveButton";
import { DonateButton } from "../donate-button/DonateButton";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { ScaleButtonContainer, ScaleButtonProvider } from "../scale-button/ScaleButton";
import { GithubAppMenuButton, PdfAppMenuButton, TelegramAppMenuButton } from "../app-menu-buttons/app-menu-buttons";
import { GatsbyImage } from "../image";


interface IAppBarProps {
}

export const AppBar: FC<IAppBarProps> = observer(( {...props} ) => {
  let { appStore } = useStores();
  let router = useRouter();

  return (
    <header className="app-bar app-bar-grid">
      <div className="app-bar-grid-item__nav-toggle">
        <If condition={ !router.isIndexPage }>
          <IconButton onClick={ () => appStore.driverToggle.toggle() }>
            <MainNavAnimatedCssIcon state={ appStore.driverToggle.invertState }/>
          </IconButton>
        </If>
      </div>
      <div className="app-bar-grid-item__logo">
        <div className="app-logo"></div>
      </div>
      <div className="app-bar-grid-item__search">
        <Search/>
      </div>
      <div className="app-bar-grid-item__donate">
        <Dropdown>
          <DropdownToggle>
            <DonateButton>
              <DonateSvgIcon/>
              <div className="donate-button__label">
                  <span>Поддержать</span>
                  <span>финансово</span>
                </div>
            </DonateButton>
          </DropdownToggle>
          <DropdownMenu className="donate__dropdown-menu">
            <div className="donate-dropdown-menu" tabIndex={ 0 }>
              <div className="donate-svg-icon__wrapper">
                <BrickwallSvgIcon className="donate-dropdown-menu__svg-icon"/>
              </div>
              <p className="donate-dropdown-menu__title">
                Сделай контент для будующих поколений ещё качественей и доступней!
              </p>
              <p className="donate-dropdown-menu__subtitle">
                Контент требует постоянного совершенстования и адаптации под каждую новую версию языка <i>TypeScript</i>.
                Это отнимает много времени и без Вашей, даже незначительно финансовой, поддержки практически невозможно.
                Прийми участие в развитии профессионального уровня своих друзей, коллег, подчиненных. Встань на сторону небезразличных!
              </p>
              <div className="donate-dropdown-menu__control">
                <a href="#" className="link-button donate-link-button_yandex">
                  <GatsbyImage className="donate-button__png-icon__yandex-money" path="icon__image/yandex-money.png"/>
                  <ForwardArrowSvgIcon/>
                </a>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="app-bar-grid-item__menu" toggle={ appStore.menuToggle.state }>
        <Dropdown >
          <DropdownToggle className="app-menu__toggle">
            <IconButton onClick={ () => appStore.menuToggle.toggle() }>
              <MenuAnimatedCssIcon state={ appStore.menuToggle.invertState }/>
            </IconButton>
          </DropdownToggle>
          <div className="app-menu">
            <header className="app-menu__header">

            </header>
            <div className="app-menu__main">
              <div className="app-menu__item">
                <PdfAppMenuButton/>
              </div>
              <div className="app-menu__item">
                <TelegramAppMenuButton/>
              </div>
              <div className="app-menu__item">
                <GithubAppMenuButton/>
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </header>
  );
});