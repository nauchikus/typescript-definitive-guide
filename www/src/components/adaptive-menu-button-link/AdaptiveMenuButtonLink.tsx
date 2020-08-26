import React, { AnchorHTMLAttributes, FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";


interface IAdaptiveMenuButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  href:string;
  className?: string;
  children: ReactElement | ReactElement[];
}

export const AdaptiveMenuButtonLink: FC<IAdaptiveMenuButtonLinkProps> = ( { href,className, children, ...props } ) => {
  let classes = cn( "adaptive-menu-button-link", className );


  return (
    <a className={ classes } href={href} {...props}>
      <RippleLayer/>
      { children }
    </a>
  );
};
