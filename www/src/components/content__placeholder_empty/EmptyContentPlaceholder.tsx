import React, { FC } from "react";

interface IEmptyContentPlaceholderProps {
  message:string;
}

export const EmptyContentPlaceholder: FC<IEmptyContentPlaceholderProps> = ( { message } ) => {
  return (
    <div className="content__content-placeholder_empty">
      <div className="content-placeholder__informer">
        <span className="content-placeholder__label">{ message }</span>
      </div>
    </div>
  );
};