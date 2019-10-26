import React, { FC, ReactElement } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn} from "classnames";

export type HorizontalAlign = "start" | "end";

interface IDropdownMenuProps {
  className?:string;
  children: ReactElement | ReactElement[];
  horizontalAlign?:HorizontalAlign;
}

export const DropdownMenu: FC<IDropdownMenuProps> = ( { horizontalAlign="end",className,children } ) => {
  let { isOpen,isClose } = useDropdown();
  let classes = cn( "dropdown__menu", className, {
    [ "dropdown__menu_open" ]: isOpen,
    [ "dropdown__menu_close" ]: isClose,
    [ "dropdown__menu_horizontal-align_end" ]: horizontalAlign === "end"
  } );

  return (
    <div className={classes}>{ children }</div>
  );
};