import React, { FC, ReactNode, useEffect, useLayoutEffect } from "react";
import { observer } from "mobx-react-lite";
import { useWinData } from "../../react__hooks/win-data-hook";
import { SectionInformerContent } from "../content__section-informer/SectionInformerContent";
import { useCopyToBufferButtonFromNativeMarkup } from "../../react__hooks/copy-to-buffer-button-from-native-markup-hook";
import { useVersionFilter } from "../../stores/mobx-entry__what-is-new";
import { Version } from "../../utils/Version";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";

interface IInnovationListWinContentProps {

}

export const InnovationListWinContent: FC<IInnovationListWinContentProps> = observer(( {  } ) => {
  useCopyToBufferButtonFromNativeMarkup();

  let {
    versionFilter,
    contentIntersectionObserver,
    router
  } = useWhatIsNewStores();
  let winContentData=useWinData();

  useLayoutEffect( () => {
    router.scrollToAnchor();
    contentIntersectionObserver.init();

    return () => contentIntersectionObserver.destroy();
  }, [] );



  let contentItemAll = winContentData.innovations
    .filter( innovation => versionFilter.canDisplayedByVersion( new Version(innovation.version).preReleaseName ) )
    .map( ( innovation, index ) => (
      <section key={ index }
               id={ innovation.path }
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