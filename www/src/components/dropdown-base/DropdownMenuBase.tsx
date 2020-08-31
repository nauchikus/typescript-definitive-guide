import React, { FC, ReactElement } from "react";
import { useDropdown } from "./dropdown-hook";
import { default as cn} from "classnames";

export type HorizontalAlign = "start" | "end";

interface IDropdownMenuBaseProps {
  baseClassName:string;
  className?:string;
  children: ReactElement | ReactElement[];
  horizontalAlign?:HorizontalAlign;
}

export const DropdownMenuBase: FC<IDropdownMenuBaseProps> = ( { horizontalAlign="end",baseClassName,className,children } ) => {
  let { isOpen,isClose } = useDropdown();
  let classes = cn( "dropdown__menu", className, {
    [ `${baseClassName}__menu_open` ]: isOpen,
    [ `${baseClassName}__menu_close` ]: isClose,
    [ `${baseClassName}__menu_horizontal-align_end` ]: horizontalAlign === "end"
  } );

  return (
    <div className={classes}>{ children }</div>
  );
};