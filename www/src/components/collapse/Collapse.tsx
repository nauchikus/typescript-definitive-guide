import React, { FC } from "react";
import { CollapseContext } from "./collpase-context";
import { CollapseService } from "../../stores/Toggle";
import { useCollapseGroup } from "../collapse__group/collpase-group-context";
import { useBookTocPageStores } from "../../stores/BookTocPageMobxEntry";
import { observer } from "mobx-react-lite";


interface ICollapseProps {
  id: string;
  isCollapse?: boolean;
}

export const Collapse: FC<ICollapseProps> = observer(({ id, isCollapse, children }) => {
  let { bookTocCollapseStore } = useBookTocPageStores();
  let node = bookTocCollapseStore.getNodeById(id);


  if (!node) {
    throw new Error(`CollapseNode with id "${id}" not found.`);
  }


  const toggle = () => bookTocCollapseStore.toggleById(id);


  return (
    <CollapseContext.Provider value={{ id, isCollapse: node.isCollapse, toggle }}>
      <div className="collapse" is-collapse={node.isCollapse ? "true" : "false"}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
});


