import React, { FC, ReactElement } from "react";
import { If } from "../if-operator/If";
import { OutsideClick } from "../outside-click/OutsideClick";
import { createToggleContext,ToggleContext } from "../../react__hooks/toggle-hook";

interface IDropdownBaseProps {
  isToggle?:boolean;
  className:string;
  children: ReactElement | ReactElement[];
}



export const DropdownBase: FC<IDropdownBaseProps> = ( { isToggle:isToggleProps=false,className,children } ) => {
  let context = createToggleContext( { isToggle: isToggleProps } );
  let { isToggle, toggle } = context;


  return (
    <ToggleContext.Provider value={ context }>
      <OutsideClick isToggle={isToggle} onOutsideClick={toggle}/>
      <div className={className}>
        { children }
      </div>
    </ToggleContext.Provider>
  );
};