import React, { FC, ReactElement, useState } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn } from "classnames";

interface IDropdownToggleBaseProps {
  baseClassName:string;
  className?:string;
  children: ReactElement | ReactElement[];
}

export const DropdownToggleBase: FC<IDropdownToggleBaseProps> = ( { baseClassName,className,children } ) => {
  let { click } = useDropdown();
  let classes = cn( className, `${ baseClassName }__toggle` );


  return (
    <div className={classes} onClick={click}>{ children }</div>
  );
};