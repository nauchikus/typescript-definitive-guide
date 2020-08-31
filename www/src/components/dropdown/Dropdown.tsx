import React, { FC, ReactElement } from "react";
import { createDropdownContext, DropdownContext } from "./dropdown-hook";
import { If } from "../if-operator/If";
import { OutsideClick } from "../outside-click/OutsideClick";
import { default as cn } from "classnames";

interface IDropdownProps {
  className?:string;
  children: ReactElement | ReactElement[];
  onOutsideClick?:()=>void;
}



export const Dropdown: FC<IDropdownProps> = ( { className,children,onOutsideClick } ) => {
  let context = createDropdownContext();
  let { isToggle, click } = context;
  let classes = cn( "dropdown", className );

  const onOutsideClickHandler = () => {
    click();
    onOutsideClick && onOutsideClick();
  };

  return (
    <DropdownContext.Provider value={ context }>
      <OutsideClick isToggle={isToggle} onOutsideClick={onOutsideClickHandler}/>
      <div className={classes}>
        { children }
      </div>
    </DropdownContext.Provider>
  );
};