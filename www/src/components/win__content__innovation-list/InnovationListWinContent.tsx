import React, { FC, ReactNode, useLayoutEffect } from "react";
import { useWinData } from "../../react__hooks/win-data-hook";
import { SectionInformerContent } from "../content__section-informer/SectionInformerContent";
import { useCopyToBufferButtonFromNativeMarkup } from "../../react__hooks/copy-to-buffer-button-from-native-markup-hook";

interface IInnovationListWinContentProps {

}

export const InnovationListWinContent: FC<IInnovationListWinContentProps> = ( {  } ) => {
  useCopyToBufferButtonFromNativeMarkup();

  let winContentData=useWinData();


  let contentItemAll = winContentData.innovations.map( ( innovation,index ) => (
    <section key={index}
             id={innovation.path}
             className="content__section win-content__innovation-list-item">
      <SectionInformerContent commitInfoAll={innovation.commitInfoAll}
                              contentOnGithubLink={innovation.fileOnGithubLink}/>
      <span dangerouslySetInnerHTML={ { __html: innovation.html } }></span>
    </section>
  ) );


  return (
    <>
      {contentItemAll}
    </>
  );
};