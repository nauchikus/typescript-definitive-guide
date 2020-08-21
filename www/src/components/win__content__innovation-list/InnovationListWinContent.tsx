import React, { Fragment,FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";
import { useWinPageContentData } from "../../react__hooks/win__page-content-data-hook";
import { SectionInformerContent } from "../content__section-informer/SectionInformerContent";
import { useCopyToBufferButtonFromNativeMarkup } from "../../react__hooks/copy-to-buffer-button-from-native-markup-hook";
import { Version } from "../../utils/Version";
import { useContentIntersectionObserver } from "../../react__hooks/content-intersection-observer-hook";
import { useWhatIsNewPageStores } from "../../stores/WinPageMobxEntry";
import * as StringUtils from "../../utils/string-utils";

interface IInnovationListWinContentProps {

}

export const InnovationListWinContent: FC<IInnovationListWinContentProps> = observer(( {  } ) => {
  useCopyToBufferButtonFromNativeMarkup();
  useContentIntersectionObserver();


  let {
    versionFilter,
  } = useWhatIsNewPageStores();
  let winContentData=useWinPageContentData();




  let contentItemAll = winContentData.innovations
    .filter( innovation => versionFilter.canDisplayedByVersion( new Version(innovation.version).preReleaseName ) )
    .map( ( innovation, index ) => (
      <section key={ index }
               id={ StringUtils.pathToNativeElementAttributeValue(innovation.path) }
               className="content__section win-content__innovation-list-item">
        <SectionInformerContent commitInfoAll={ innovation.commitInfoAll }
                                contentOnGithubLink={ innovation.fileOnGithubLink }/>
        <span dangerouslySetInnerHTML={ { __html: innovation.html } }></span>
      </section>
    ) );



  return (
    <>
      {contentItemAll}
    </>
  );
});
