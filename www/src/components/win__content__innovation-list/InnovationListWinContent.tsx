import React, { FC, ReactNode } from "react";
import { InnovationCoverWinContent } from "../win__content_innovation-cover/InnovationCoverWinContent";
import { useWinData } from "../../react__hooks/win-data-hook";

interface IInnovationListWinContentProps {

}

export const InnovationListWinContent: FC<IInnovationListWinContentProps> = ( {  } ) => {
  let winContentData=useWinData();

  let contentItemAll = winContentData.innovations.map( ( innovation,index ) => (
    <section key={index}
             id={innovation.path}
             className="win-content__innovation-list-item"
             dangerouslySetInnerHTML={ { __html: innovation.html } }></section>
  ) );

  return (
    <>
      {contentItemAll}
    </>
  );
};