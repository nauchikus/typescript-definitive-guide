import React, { FC, ReactNode } from "react";

interface IContentLayoutProps {
  children:ReactNode|ReactNode[];
}

export const ContentLayout: FC<IContentLayoutProps> = ( { children } ) => {
  return (
    <div className="content-layout">
      { children }
    </div>
  );
};