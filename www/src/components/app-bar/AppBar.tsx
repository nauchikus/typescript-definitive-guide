import React, { FC } from "react";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { IconButton } from "../icon-button/IconButton";
import { MenuAnimatedCssIcon } from "../menu-animated-css-icon/MenuAnimatedCssIcon";
import { GithubAppMenuButton, PdfAppMenuButton, TelegramAppMenuButton } from "../app-menu-buttons/app-menu-buttons";
import { Dropdown } from "../dropdown/Dropdown";
import { useShareStores } from "../../mobx";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { ThreeDotsAnimatedCssIcon } from "../icon__css-icon__three-dots-animated-css-icon/ThreeDotsAnimatedCssIcon";
import { observer } from "mobx-react-lite";

interface IAppBarProps {
}

export const AppBar: FC<IAppBarProps> = observer(( {} ) => {
  let { appStore } = useShareStores();

  const menuDropdownToggle = () => appStore.menuToggle.toggle();

  return (
    <Dropdown className="app-bar-dropdown" onOutsideClick={menuDropdownToggle}>
      <DropdownToggle className="app-bar-dropdown__toggle">
        <IconButton onClick={ menuDropdownToggle }>
          <ThreeDotsAnimatedCssIcon state={ appStore.menuToggle.state }/>
        </IconButton>
      </DropdownToggle>
      <DropdownMenu className="app-bar-dropdown__menu"
                    openClassName="app-bar-dropdown__menu_open"
                    closeClassName="app-bar-dropdown__menu_close">
        <div className="app-bar">
          <div className="app-bar__section">
            <PdfAppMenuButton/>
            <TelegramAppMenuButton/>
            <GithubAppMenuButton/>
          </div>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
});