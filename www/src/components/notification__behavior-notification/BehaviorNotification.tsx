import React, { FC, ReactElement } from "react";
import { NoticeType } from "../../stores/PageNavStore";
import { DefaultBehaviorNotice } from "../notification__behavior-notice__default-notice/DefaultBehaviorNotice";
import { observer } from "mobx-react-lite";
import { CopyLinkDefaultBehaviorNotice } from "../notification__behavior-notice__copy-link-default-notice/CopyLinkDefaultBehaviorNotice";
import { useBehaviorNotification } from "../../react__context/BehaviorNotificationContext";

interface IBehaviorNotificationProps {
}

///TODO: [refactoring][extract]
export class NoticeReactComponentFactory {
  private static readonly componentMap = new Map<NoticeType, FC<any>>( [
    [NoticeType.DefaultNotice, DefaultBehaviorNotice],
    [NoticeType.CopyLinkDefaultNotice, CopyLinkDefaultBehaviorNotice],
  ] );

  public static readonly getNoticeComponentByType = ( id: NoticeType ) =>
    NoticeReactComponentFactory.componentMap.get( id );
}

export const BehaviorNotification: FC<IBehaviorNotificationProps> = observer( ( {} ) => {
  let behaviorNotificationStore = useBehaviorNotification();

  let notices = behaviorNotificationStore.noticeAll.map( noticeModel => {
    let Notice = NoticeReactComponentFactory.getNoticeComponentByType( noticeModel.type );


    if ( !Notice ) {
      return;
    }


    return (
      <Notice key={ noticeModel.id } model={ noticeModel }/>
    );
  } );


  return (
    <div className="behavior-notification">
      { notices }
    </div>
  );
} );