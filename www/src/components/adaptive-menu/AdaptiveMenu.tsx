import React, { FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { createToggleContext, ToggleContext } from "../../react__hooks/toggle-hook";

interface IAdaptiveMenuProps {
  isToggle?:boolean;
  className?:string;
  children: ReactElement | ReactElement[];
}

export const AdaptiveMenu: FC<IAdaptiveMenuProps> = ( {isToggle,className,children} ) => {
  let context = createToggleContext( { isToggle } );
  let { isOpen, isClose } = context;
  let classes = cn( "adaptive-menu", className, {
    ['adaptive-menu__open']:isOpen,
    ['adaptive-menu__close']:isClose,
  });

  return (
    <ToggleContext.Provider value={context}>
      <div className="adaptive-menu">
        {children}
      </div>
    </ToggleContext.Provider>
  );
};