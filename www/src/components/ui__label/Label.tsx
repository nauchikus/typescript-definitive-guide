import React, { FC, ReactNode } from "react";
import { default as cn } from "classnames";
import { useInputChecked } from "../ui__radio/Radio";


interface ILabelProps {
  id?:string;
  className?:string;
  children:ReactNode|ReactNode[];
}

export const Label: FC<ILabelProps> = ( { id:externalId, className,children } ) => {
  let { id = externalId } = useInputChecked();
  let classes = cn( `label`, className );

  return (
    <label htmlFor={ id } className={classes}>
      { children }
    </label>
  );
};