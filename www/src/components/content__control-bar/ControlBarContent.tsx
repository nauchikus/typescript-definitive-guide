import React, { FC, ReactNode } from "react";

interface IControlBarContentProps {
  children?: ReactNode | ReactNode[];
}

export const ControlBarContent: FC<IControlBarContentProps> = ( {children} ) => {
  return (
    <div className="content__control-bar">
      {children}
    </div>
  );
};
