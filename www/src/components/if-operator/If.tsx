import React, { FC, ReactElement, ReactNode } from "react";

interface IIFProps {
  condition:boolean;
  children: ReactElement | ReactElement[];
}

export const If: FC<IIFProps> = ( { condition, children } ) =>
  condition ? <>{ children }</> : null;