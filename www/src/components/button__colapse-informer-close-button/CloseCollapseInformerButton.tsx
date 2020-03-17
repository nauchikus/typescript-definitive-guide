import React, { FC } from "react";
import { CloseSvgIcon } from "../icon__svg-icon/svg-icons";
import { IconButton } from "../icon-button/IconButton";
import { observer } from "mobx-react-lite";
import { useBaseLayoutStores } from "../../mobx__react-content-provider/BaseLayoutMobxProvider";

interface ICloseCollapseInformerButtonProps {
}

export const CloseCollapseInformerButton: FC<ICloseCollapseInformerButtonProps> = observer( ( {} ) => {
  let {informerRotator} = useBaseLayoutStores();

  return (
    <IconButton className="collapse-informer__button-close" onClick={ () => informerRotator.closeCurrentInformer() }>
      <CloseSvgIcon/>
    </IconButton>
  );
} );