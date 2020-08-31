import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";

interface IAsideBarContentProps {
  className?:string;
  children: ReactNode | ReactNode[];
}

export const AsideBarContent: FC<IAsideBarContentProps> = ( { className, children } ) => {
  let classes = cn( "content__aside-bar", className );

  return (
    <div className={classes}>
      { children }
    </div>
  );
};