import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { useWinPageContentData } from "../../react__hooks/win__page-content-data-hook";
import { SectionInformerContent } from "../content__section-informer/SectionInformerContent";
import { useCopyToBufferButtonFromNativeMarkup } from "../../react__hooks/copy-to-buffer-button-from-native-markup-hook";
import { useContentIntersectionObserver } from "../../react__hooks/content-intersection-observer-hook";
import { useWhatIsNewPageStores } from "../../mobx__entry/WinPageMobxEntry";
import { useHtmlLink } from "../../react__hooks/useHtmlLink";

interface IInnovationListWinContentProps {

}

export const InnovationListWinContent: FC<IInnovationListWinContentProps> = observer(( {  } ) => {
  useCopyToBufferButtonFromNativeMarkup();
  useContentIntersectionObserver();
  useHtmlLink();


  let {
    innovations,
  } = useWhatIsNewPageStores();


  // innovations.innovationDataAll.forEach(i=>console.log(i.version))

  let contentItemAll = innovations.innovationDataAll
    .map((innovation, index) => (
      <section key={index}
               id={innovation.path}
               className="content__section win-content__innovation-list-item">
        <SectionInformerContent commitInfoAll={innovation.commitInfoAll}
                                contentOnGithubLink={innovation.fileOnGithubLink}/>
        <span className="content__html-content-wrapper" dangerouslySetInnerHTML={{ __html: innovation.html }}></span>
      </section>
    ));



  return (
    <>
      {contentItemAll}
    </>
  );
});
