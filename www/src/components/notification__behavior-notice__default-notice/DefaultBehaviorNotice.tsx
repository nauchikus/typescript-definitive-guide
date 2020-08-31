import React, { FC, ReactNode, useLayoutEffect } from "react";
import { default as cn } from "classnames";
import { observer } from "mobx-react-lite";
import { INoticeModel, NoticePhase } from "../../stores/behavior-notificaion-store";


export interface IDefaultBehaviorNoticeProps {
  model:INoticeModel;
  children?: ReactNode | ReactNode[];
}

export const DefaultBehaviorNotice: FC<IDefaultBehaviorNoticeProps> = observer( ( { model,children } ) => {
  const isCurrentNotice = ( model: INoticeModel ) => model.index.current + 1 === model.index.total;
  const changeNoticePhase = () => {
    if ( model.phase === NoticePhase.Show ) {
      model.hide();
    } else if ( model.phase === NoticePhase.Hide ) {
      model.destroy();
    }

  };

  let opacityContainerClasses = cn( `behavior-notice_default-notice_opacity-container`, {
    [ `behavior-notice_default-notice_opacity-container_hidden` ]: model.phase === NoticePhase.BeforeShow
  } );
  let noticeClasses = cn( `behavior-notice_default-notice`, {
    [ `behavior-notice_default-notice_show` ]: model.phase === NoticePhase.Show,
    [ `behavior-notice_default-notice_hide` ]: model.phase === NoticePhase.Hide
  } );


  if ( !isCurrentNotice( model ) ) {
    model.destroy();
  }


  useLayoutEffect( () => {
    window.setTimeout( () => model.show(), 0 );
  }, [] );


  return (
    <div className={ opacityContainerClasses }>
      <div className={ noticeClasses } onTransitionEnd={ ( event ) => changeNoticePhase() }>
        { children ?? model.message }
      </div>
    </div>
  );
} );