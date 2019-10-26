import React, { FC, ReactElement, useState } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn } from "classnames";

interface IDropdownToggleProps {
  className?:string;
  children: ReactElement | ReactElement[];
}

export const DropdownToggle: FC<IDropdownToggleProps> = ( { className,children } ) => {
  let { isEnter, enter, click } = useDropdown();
  let classes = cn( "dropdown__toggle", className );

  let handlers = {
    onClick:click,
    onMouseEnter: isEnter ? enter : undefined
  };


  return (
    <div className={classes} {...handlers}>{ children }</div>
  );
};