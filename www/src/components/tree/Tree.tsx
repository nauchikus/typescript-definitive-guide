import React, { FC } from "react";
import { default as cn } from "classnames";


interface ITreeProps {
  level:number;
}



export const Tree: FC<ITreeProps> = ({ level, children } ) => {
  let classes = cn(`tree`, `tree-level_${level}`);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
