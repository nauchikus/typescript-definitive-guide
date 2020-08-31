import React, { FC, ReactNode } from "react";

interface IContentGridLayoutProps {
  controlBar:ReactNode;
  content:ReactNode;
  footer:ReactNode;
}

export const ContentGridLayout:FC<IContentGridLayoutProps>=({controlBar,content,footer})=>{
  return (
    <div className="content-grid">
      <div className="content-grid-item__control-bar">{controlBar}</div>
      <div className="content-grid-item__content">{content}</div>
      <div className="content-grid-item__footer">{footer}</div>
    </div>
  )
}