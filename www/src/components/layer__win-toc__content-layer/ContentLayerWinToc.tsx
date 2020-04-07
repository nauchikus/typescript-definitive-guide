import React, { FC } from "react";
import { WhatIsNewTocTreeItem } from "../../components/what-is-new-toc-tree-item/WhatIsNewTocTreeItem";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, WhatIsNewTocGuiLocalization } from "../../localization";
import * as NativeUtils from "../../utils/native-utils";
import { useBehaviorNotificationAction } from "../../react__hooks/behavior-notification-action-hook";
import { useWhatIsNewTocPageStores } from "../../stores/mobx-entry__what-is-new_toc";

interface IContentLayerWinTocProps {
}

export const ContentLayerWinToc: FC<IContentLayerWinTocProps> = ( {} ) => {
  let [t] = useTranslator<[WhatIsNewTocGuiLocalization]>( LocalizationPaths.WhatIsNewTocPageGui );
  let { winTocTreeStore,router } = useWhatIsNewTocPageStores();
  let behaviorNotificationActions = useBehaviorNotificationAction();


  const onCopyLinkToBuffer = ( path: string ) => {
    let href = `${ router.origin }${ path }`;

    NativeUtils.copyToBuffer( href );
    behaviorNotificationActions.copyLink();
  };

  let winTocTree = winTocTreeStore.tree.reverse().map( tocTreeNode => (
    <WhatIsNewTocTreeItem key={tocTreeNode.id}
                          winTocTreeNodeId={ tocTreeNode.id }
                          onCopyLinkToBuffer={ onCopyLinkToBuffer }/>
  ) );


  return(
    <main className="content content-without-control win-toc-content">
      {winTocTree}
    </main>
  );
};