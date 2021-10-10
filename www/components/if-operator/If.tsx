import React, { FC, ReactNode } from "react";

interface IIFProps {
  condition:boolean;
  children: ReactNode | ReactNode[];
}

export const If: FC<IIFProps> = ( { condition, children } ) =>
  condition ? <>{ children }</> : null;