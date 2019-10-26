import React, { FC, ReactElement } from "react";
import { createDropdownContext, DropdownContext } from "./dropdown-hook";
import { If } from "../if-operator/If";
import { OutsideClick } from "../outside-click/OutsideClick";

interface IDropdownProps {
  children: ReactElement | ReactElement[];
}



export const Dropdown: FC<IDropdownProps> = ( { children } ) => {
  let context = createDropdownContext();
  let { isToggle, isLeave, leave } = context;

  let handlers = {
    onMouseLeave: isLeave ? leave : undefined
  };

  /* <If condition={isToggle}>
            <OutsideClick onOutsideClick={context.click}/>
          </If>*/
  return (
    <DropdownContext.Provider value={ context }>
      <div className="dropdown"{ ...handlers }>

        { children }
      </div>
    </DropdownContext.Provider>
  );
};