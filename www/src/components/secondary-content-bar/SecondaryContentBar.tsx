import React, { FC, ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { useBookTocPageStores } from "../../stores/mobx-entry__book_toc";

interface ISecondaryContentBarProps {
  children:ReactNode|ReactNode[];
}

export const SecondaryContentBar: FC<ISecondaryContentBarProps> = observer(( { children } ) => {
  let { tocFilterStore } = useBookTocPageStores();


  return (
    <div className="content-layout-grid-item__secondary-content-bar secondary-content-bar" toggle-state={tocFilterStore.state}>
      { children }
    </div>
  );
});