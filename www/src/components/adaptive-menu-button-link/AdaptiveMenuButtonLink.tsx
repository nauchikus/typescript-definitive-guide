import React, { AnchorHTMLAttributes, FC, ReactElement } from "react";
import { default as cn } from "classnames";
import { RippleLayer } from "../ripple-layer/RippleLayer";
import { Link } from "gatsby";


interface IAdaptiveMenuButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  href:string;
  className?: string;
  children: ReactElement | ReactElement[];
}

export const AdaptiveMenuButtonLink: FC<IAdaptiveMenuButtonLinkProps> = ( { href,className, children, ...props } ) => {
  let classes = cn( "adaptive-menu-button-link", className );


  return (
    <Link className={ classes } to={href} {...props}>
      <RippleLayer/>
      { children }
    </Link>
  );
};
