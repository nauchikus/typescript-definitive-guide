import { createDropdownContext, DropdownContext } from "./dropdown-hook";
import { OutsideClick } from "../outside-click/OutsideClick";
import { default as cn } from "classnames";
import React, {FC, ReactElement, Reducer, useReducer} from "react";




interface IDropdownProps {
  className?:string;
  children: ReactElement | ReactElement[];
  onOutsideClick?:()=>void;
}



export const Dropdown: FC<IDropdownProps> = ( { className,children,onOutsideClick } ) => {
  let context = createDropdownContext();
  let classes = cn( "dropdown", className );

  const onOutsideClickHandler = () => {
      context.click();
  };


  return (
    <DropdownContext.Provider value={ context }>
      <OutsideClick isToggle={context.isOpen} onOutsideClick={onOutsideClickHandler}/>
      <div className={classes} open={context.isOpen}>
        { children }
      </div>
    </DropdownContext.Provider>
  );
};
