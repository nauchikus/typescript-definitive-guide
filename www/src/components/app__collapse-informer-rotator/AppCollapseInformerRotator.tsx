import React, { FC } from "react";
import { DonateInformer } from "../informer__danate-informer/DonateInformer";
import { CloseCollapseInformerButton } from "../button__colapse-informer-close-button/CloseCollapseInformerButton";
import { If } from "../if-operator/If";
import { observer } from "mobx-react-lite";
import { useBaseLayoutStores } from "../../mobx/BaseLayoutMobxProvider";
import { WinSearchCopywritesInformer } from "../informer__win-search-copywriters-informer/WinSearchCopywritesInformer";
import { InformerId } from "../../react__hooks/collapse-informer-hook";

interface IAppCollapseInformerRotatorProps {
}

class InformerReactComponentFactory{
  private static readonly componentMap = new Map( [
    [InformerId.DonateInformer, DonateInformer],
    [InformerId.WinSearchCopywritersInformer, WinSearchCopywritesInformer]
  ] );

  public static readonly getInformerById = ( informerId: InformerId ) =>
    InformerReactComponentFactory.componentMap.get( informerId );
}


export const AppCollapseInformerRotator: FC<IAppCollapseInformerRotatorProps> = observer( ( {} ) => {
  let {informerRotator} = useBaseLayoutStores();

  let Informer = InformerReactComponentFactory.getInformerById( informerRotator.currentInformerId );

  if ( !Informer ) {
    return null;
  }

  return (
    <If condition={ informerRotator.isInformerActive }>
      <aside className="app__collapse-informer-rotator">
        <CloseCollapseInformerButton/>
        <Informer/>
      </aside>
    </If>
  );
} );