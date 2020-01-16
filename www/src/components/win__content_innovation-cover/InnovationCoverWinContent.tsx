import React, { FC } from "react";
import { useWinData } from "../../react__hooks/win-data-hook";
import * as DateUtils from "../../utils/date-utils";
import { DynamicGatsbyImage } from "../dynamic-gatsby-image/DynamicGatsbyImage";

interface IInnovationCoverWinContentProps {
}

export const InnovationCoverWinContent: FC<IInnovationCoverWinContentProps> = ( {} ) => {
  let winContentData=useWinData();

  let { versionMMP } = winContentData;
  let { version: lastVersion, date:lastDate } = winContentData.lastVersionStatus;
  let lastVersionReleaseDate = DateUtils.toAppDateFormat( lastDate );

  let relativePath = `${ versionMMP }/metadata/cover.png`;

  return (
    <section className="content__section win-content__innovation-cover win-innovation-cover-grid">

      <div className="win-innovation-cover-grid-item__cover">
        <DynamicGatsbyImage className="win-innovation-cover__cover" relativePath={relativePath} alt="cover"/>
      </div>

      <div className="win-innovation-cover-grid-item__title">
        <h1 className="win-innovation-cover__title">
          {lastVersion}
        </h1>
      </div>

      <div className="win-innovation-cover-grid-item__date">
        <time className="win-innovation-cover__date" dateTime={lastDate}>
          {lastVersionReleaseDate}
        </time>
      </div>

    </section>
  );
};