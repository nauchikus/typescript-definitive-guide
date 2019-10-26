import React, { FC, ReactElement } from "react";
import { IconButton } from "../icon-button/IconButton";
import { MainNavAnimatedCssIcon } from "../main-nav-animated-css-icon/MainNavAnimatedCssIcon";
import { useAppDriver } from "../../react-hooks/app-driver-control.hook";

interface IIconButtonProps {
  children: ReactElement;
}

export const MainNavToggleButton: FC<IIconButtonProps> = ( { children } ) => {
  let []=useAppDriver()
  return (
    <IconButton>
      <MainNavAnimatedCssIcon/>
    </IconButton>
  );
};