import React, { FC, ReactElement } from "react";
import { AdaptiveMenuButtonLink } from "../adaptive-menu-button-link/AdaptiveMenuButtonLink";
import { ScaleContainer, ScaleContainerProvider } from "../transform__scale-container/ScaleContainer";
import { PdfSvgIcon } from "../svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";

interface IAppBarButtonProps {
  children: ReactElement | ReactElement[];
}

// export const AppBarButton:FC<IAppBarButtonProps>=({children})=>{
//   return (
//     <ScaleContainerProvider>
//       <AdaptiveMenuButtonLink className="app-menu-item__item" href="#">
//         <ScaleContainer>
//           <PdfSvgIcon/>
//         </ScaleContainer>
//         <Tooltip className="tooltip_pdf" position={TooltipPosition.BottomCenter}>
//           <p>Скачать</p>
//           <p>PDF версию</p>
//         </Tooltip>
//         <div className="adaptive-menu-button-link__label">
//           <span>Скачать PDF версию</span>
//         </div>
//       </AdaptiveMenuButtonLink>
//     </ScaleContainerProvider>
//   )
// }