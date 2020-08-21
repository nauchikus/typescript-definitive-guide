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
    <section className="content__section win-content__innovation-cover win-innovation-cover-grid">

      <div className="win-innovation-cover-grid-item__cover">
        <DynamicGatsbyImage className="win-innovation-cover__cover" relativePath={relativePath} alt="cover"/>
      </div>

      <div className="win-innovation-cover-grid-item__title">
        <h1 className="win-innovation-cover__title">
          {version.mmp}
        </h1>
        <span className="win-innovation-cover__subtitle">
          {version.preReleaseName}
        </span>
      </div>

      <div className="win-innovation-cover-grid-item__date">
        <time className="win-innovation-cover__date" dateTime={versionInfo.dateRelease}>
          {lastVersionReleaseDate}
        </time>
      </div>

    </section>
  );
};
