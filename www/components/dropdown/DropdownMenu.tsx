import React, { FC, ReactElement } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn} from "classnames";


interface IDropdownMenuProps {
  className?:string;
  children: ReactElement | ReactElement[];
}

export const DropdownMenu: FC<IDropdownMenuProps> = ( { className,children } ) => {
  let { isOpen } = useDropdown();
  let classes = cn( "dropdown__menu", className );

  return (
    <div className={classes} open={isOpen}>{ children }</div>
  );
};