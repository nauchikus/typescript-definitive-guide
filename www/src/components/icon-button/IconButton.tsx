import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";

interface IIconButtonProps {
  className?:string;
  children: ReactElement|ReactElement[];
  onClick?:()=>void;
  isToggle?:boolean
}

export const IconButton: FC<IIconButtonProps> = ( { isToggle=false,className, children, onClick } ) => {
  let buttonClasses = cn( className, {
    "icon-button": true,
    "toggle-button_on": isToggle
  } );

  return (
    <button className={buttonClasses} onClick={ onClick }>{ children }</button>
  );
};