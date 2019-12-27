import React, { FC, ReactNode } from "react";
import { useBookTocStores } from "../../mobx/MobxBookTocProvider";
import { observer } from "mobx-react-lite";

interface ISecondaryContentBarProps {
  children:ReactNode|ReactNode[];
}

export const SecondaryContentBar: FC<ISecondaryContentBarProps> = observer(( { children } ) => {
  let { tocFilterStore } = useBookTocStores();


  return (
    <div className="content-layout-grid-item__secondary-content-bar secondary-content-bar" toggle-state={tocFilterStore.state}>
      { children }
    </div>
  );
});