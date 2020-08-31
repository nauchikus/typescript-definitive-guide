import React, { FC, ReactElement } from "react";


interface IWrapperWithTail {
  children: ReactElement | ReactElement[];
}

export const WrapperWithTail: FC<IWrapperWithTail> = ( { children } ) => {
  return (
    <div className="wrapper-with-tail">
      { children }
    </div>
  );
};