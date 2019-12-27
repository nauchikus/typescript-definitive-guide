import React, { FC } from "react";
import { useWhatIsNewTocStores } from "../../mobx/MobxWhatIsNewTocProvider";
import { WhatIsNewTocTreeItem } from "../../components/what-is-new-toc-tree-item/WhatIsNewTocTreeItem";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, WhatIsNewTocGuiLocalization } from "../../localization";

interface IWhatIsNewTocContentLayoutProps {
}

export const WhatIsNewTocContentLayout: FC<IWhatIsNewTocContentLayoutProps> = ( {} ) => {
  let [t] = useTranslator<[WhatIsNewTocGuiLocalization]>( LocalizationPaths.WhatIsNewTocPageGui );
  let { winTocTreeStore } = useWhatIsNewTocStores();

  const onCopyLinkToBuffer = ( path: string ) => {
  };

  let winTocTree = winTocTreeStore.tree.reverse().map( tocTreeNode => (
    <WhatIsNewTocTreeItem key={tocTreeNode.id}
                          winTocTreeNodeId={ tocTreeNode.id }
                          onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
  ) );


  return(
    <div className="win-toc-content-layout win-content-layout__grid">
      <div className="win-content-layout-grid-item__primary-content-bar">
        <div className="win-toc-content-layout__bar">
          <div className="primary-content-bar">
            <span className="primary-content-bar__label">{t.primaryContentBar.label}</span>
          </div>
        </div>
      </div>
      <div className="win-content-layout-grid-item__content">
        <div className="win-toc-content-layout__content">
          {winTocTree}
        </div>
      </div>
    </div>
  );
};