import React, { FC, ReactNode } from "react";

interface IContentLayoutProps {
  controlBar:ReactNode;
  content:ReactNode;
}

export const ContentLayout: FC<IContentLayoutProps> = ( { controlBar,content } ) => {
  return (
    <div className="content-layout">
      <div className="content-layout__control-bar">{controlBar}</div>
      <div className="content-layout__content">{content}</div>
    </div>
  );
};