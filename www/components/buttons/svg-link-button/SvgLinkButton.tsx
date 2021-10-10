import React, { FC, ReactElement } from "react";
import {default as cn} from "classnames";


interface ISvgLinkButtonProps {
  className?: string;
  href: string;
  title?: string;
}

export const SvgLinkButton: FC<ISvgLinkButtonProps> = ( {href, title, className, children} ) => {
    const classes = cn(`link`, `svg-link-btn`, className);

    return (
      <a className={classes} href={href} title={title} target="_blank">
          {children}
      </a>

  );
};

