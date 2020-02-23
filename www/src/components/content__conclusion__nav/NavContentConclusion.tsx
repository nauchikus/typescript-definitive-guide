import React, { FC } from "react";
import { If } from "../if-operator/If";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";
import { BackArrowSvgIcon, ForwardArrowSvgIcon } from "../icon__svg-icon/svg-icons";

interface INavContentConclusionProps {
}

export const NavContentConclusion:FC<INavContentConclusionProps>=()=>{
  let { contentNav } = useWhatIsNewStores();

  return (
    <nav className="content-conclusion__nav">
      <button className="conclusion-prev-button" onClick={()=>contentNav.goPrevPage()}>
        <If condition={ contentNav.hasPrevPage() }>
          <span className="conclusion-label">
            {contentNav.pageItem.prevPage?.name}
          </span>
          <BackArrowSvgIcon className="conclusion-button__svg-icon"/>
        </If>
      </button>
      <button className="conclusion-next-button" onClick={()=>contentNav.goNextPage()}>
        <If condition={contentNav.hasNextPage()}>
          <span className="conclusion-label">
            {contentNav.pageItem.nextPage?.name}
          </span>
          <ForwardArrowSvgIcon className="conclusion-button__svg-icon"/>
        </If>
      </button>
    </nav>
  );
}