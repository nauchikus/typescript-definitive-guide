import React, { FC, ReactNode, useRef } from "react";
import { DriverContext } from "../../react__hooks/app-driver-hook";

interface IAppDriverProps {
  children:ReactNode|ReactNode[];
}

export const AppDriver: FC<IAppDriverProps> = ( { children } ) => {
  return (
    <div className="app-driver">
      { children }
    </div>

  );
};
