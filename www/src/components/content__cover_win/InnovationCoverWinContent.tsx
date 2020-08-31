import React, { FC } from "react";
import { useWinPageContentData } from "../../react__hooks/win__page-content-data-hook";
import * as DateUtils from "../../utils/date-utils";
import { DynamicGatsbyImage } from "../dynamic-gatsby-image/DynamicGatsbyImage";
import { toLastReleaseInfo, toVersionInfo } from "../../utils/version-utils";

interface IInnovationCoverWinContentProps {
}

export const InnovationCoverWinContent: FC<IInnovationCoverWinContentProps> = ( {} ) => {
  let winContentData = useWinPageContentData();

  let versionInfo = toLastReleaseInfo( winContentData );
  let version = toVersionInfo( versionInfo.version );
  let lastVersionReleaseDate = DateUtils.toAppDateFormat( versionInfo.dateRelease );

  let relativePath = `${ version.mmp }/metadata/cover.png`;



  return (
    <section className="content__section">

      <div className="main-presentation">

        <div className="main-meta">
        <span className="main-meta-informer__version">
          {version.preReleaseName}
        </span>
          <time className="main-meta-informer__date" dateTime={versionInfo.dateRelease}>
            {lastVersionReleaseDate}
          </time>
        </div>

        <h1 className="main-title">
          {version.mmp}
        </h1>

        <div className="main-cover">
          <DynamicGatsbyImage className="win-innovation-cover__cover" relativePath={relativePath} alt="cover"/>
        </div>

      </div>

    </section>
  );
};
