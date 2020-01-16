import React, { FC } from "react";
import {
  DefaultBehaviorNotice,
  IDefaultBehaviorNoticeProps
} from "../notification__behavior-notice__default-notice/DefaultBehaviorNotice";
import { LinkSvgIcon } from "../icon__svg-icon/svg-icons";


interface ICopyLinkDefaultBehaviorNoticeProps extends IDefaultBehaviorNoticeProps{
}

export const CopyLinkDefaultBehaviorNotice: FC<ICopyLinkDefaultBehaviorNoticeProps> = ( { model } ) => {
  return (
    <DefaultBehaviorNotice model={ model }>
      <div className="copy-link-default-behavior-notice">
        <div className="copy-link-default-behavior-notice__icon_wrapper">
          <LinkSvgIcon className="copy-link-default-behavior-notice__icon"/>
        </div>
        <span className="copy-link-default-behavior-notice__label">{ model.message }</span>
      </div>
    </DefaultBehaviorNotice>
  );
};