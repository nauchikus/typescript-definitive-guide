import React, { FC, ReactElement, useLayoutEffect, useState } from "react";
import { If } from "../if-operator/If";

interface IOutsideClickProps {
  isToggle?:boolean;
  onOutsideClick?: (isToggle?:boolean) => void
}

export const OutsideClick: FC<IOutsideClickProps> = ( {isToggle=false,onOutsideClick} ) => {
  const toggle = () => onOutsideClick && onOutsideClick( !isToggle );

  return (
    <If condition={isToggle}>
      <div className="outside-click" onClick={toggle}></div>
    </If>
  );
};