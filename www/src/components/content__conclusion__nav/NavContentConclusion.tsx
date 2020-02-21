import React, { FC } from "react";
import { If } from "../if-operator/If";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";

interface INavContentConclusionProps {
}

export const NavContentConclusion:FC<INavContentConclusionProps>=()=>{
  let { router,contentNav } = useWhatIsNewStores();

  return (
    <nav className="content-conclusion__nav">
      <button className="conclusion-button-prev" onClick={()=>contentNav.goPrevPage()}>
        <If condition={ contentNav.hasPrevPage() }>
          <span className="conclusion-label">
            {contentNav.pageItem.prevPage?.name}
          </span>
        </If>
      </button>
      <button className="conclusion-button-next" onClick={()=>contentNav.goNextPage()}>
        <If condition={contentNav.hasNextPage()}>
          <span className="conclusion-label">
            {contentnav.pageItem.nextPage?.name}
          </span>
        </If>
      </button>
    </nav>
  );
}