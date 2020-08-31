import React, { FC, ReactElement } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn} from "classnames";

export type HorizontalAlign = "start" | "end";

interface IDropdownMenuProps {
  openClassName:string;
  closeClassName:string;
  className?:string;
  children: ReactElement | ReactElement[];
  horizontalAlign?:HorizontalAlign;
}

export const DropdownMenu: FC<IDropdownMenuProps> = ( { openClassName,closeClassName,horizontalAlign="end",className,children } ) => {
  let { isOpen,isClose } = useDropdown();
  let classes = cn( "dropdown__menu", className, {
    [ openClassName ]: isOpen,
    [ closeClassName ]: isClose,
    [ "dropdown__menu_horizontal-align_end" ]: horizontalAlign === "end"
  } );

  return (
    <div className={classes}>{ children }</div>
  );
};