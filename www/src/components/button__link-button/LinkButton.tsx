import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";


interface ILinkButtonProps {
  href:string;
  className?:string;
  children: ReactNode | ReactNode[];
}

export const LinkButton: FC<ILinkButtonProps> = ( { href, children, className } ) => {
  let classes = cn( `link-button`, className );

  return (
    <a className={ classes } href={ href }>
      { children }
    </a>
  );
};