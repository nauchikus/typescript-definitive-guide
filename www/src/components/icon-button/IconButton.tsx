import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";

export enum Size{
  SM="sm",
  MD="md"
}

interface IIconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  className?:string;
  children: ReactElement|ReactElement[];
  onClick?:()=>void;
  isToggle?:boolean;
  size?:Size;
}

export const IconButton: FC<IIconButtonProps> = ( { isToggle=false,size=Size.MD,className, children, onClick ,...buttonElementProps} ) => {
  let buttonClasses = cn( className, {
    "icon-button": true,
    "toggle-button_on": isToggle,
    "icon-button_size_sm":size===Size.SM,
    "icon-button_size_md":size===Size.MD,
  } );

  return (
    <button className={buttonClasses}
            onClick={ onClick }
            {...buttonElementProps}>
      { children }
    </button>
  );
};