import React, { FC } from "react";
import { ShareSocialNetwork } from "../social-network__share/ShareSocialNetwork";

interface IContentUnderCoverBarProps {
}

export const ContentUnderCoverBar: FC<IContentUnderCoverBarProps> = ( {} ) => {
  return (
    <div className="content__under-cover-bar">
      <ShareSocialNetwork/>
    </div>
  );
};
