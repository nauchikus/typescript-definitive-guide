import React, { FC, ReactNode } from "react";


interface ICheckboxLabelProps {
  children?: ReactNode | ReactNode[];
  id?:string;
}

export const CheckboxLabel: FC<ICheckboxLabelProps> = ( { id,children } ) => {
  return (
    <label htmlFor={id} className="checkbox__label">
      {children}
    </label>
  );
};