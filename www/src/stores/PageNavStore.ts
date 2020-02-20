import { observable } from "mobx";

export enum NoticeType {
  DefaultNotice="defaultNotice",
  CopyLinkDefaultNotice="copyLinkDefaultNotice",
}
export enum NoticePhase {
  BeforeShow="beforeShow",
  Show="show",
  UserClose="userClose",
  AutoClose="autoClose",
  Hide="hide",
}

export interface INotice {
  type:NoticeType;
  id?:string;
  message:string;
}
export interface INoticeModel extends INotice{
  phase:NoticePhase;
  index:{
    current:number;
    total:number;
  };
  show():void;
  hide():void;
  userClose():void;
  autoClose():void;
  destroy():void;
}



export const createBehaviorNotification = () => {
  const store = observable( {
    noticeAll: [] as INoticeModel[],
    send ( notice: INotice ) {
      this.noticeAll.push( {
        ...notice,
        phase: NoticePhase.BeforeShow,
        index: {
          current: this.noticeAll.length,
          total: this.noticeAll.length + 1
        },

        show () {
          this.phase = NoticePhase.Show;
        },
        hide () {
          this.phase = NoticePhase.Hide;
        },
        userClose (): void {
          this.phase = NoticePhase.UserClose;
        },
        autoClose (): void {
          this.phase = NoticePhase.AutoClose;
        },
        destroy (): void {
          destroy( this );
        }
      } );

      changeIndex( this.noticeAll );
    }
  } );
  const changeIndex = ( noticeAll: INoticeModel[] ) => noticeAll.forEach( ( notice, index, array ) => {
    notice.index.current = index;
    notice.index.total = array.length;
  } );
  const destroy = ( noticeModel: INoticeModel ) => {
    // store.noticeAll = store.noticeAll.filter( item => item !== noticeModel );
    store.noticeAll.splice( store.noticeAll.indexOf( noticeModel ), 1 );

    changeIndex( store.noticeAll );
  };


  return store;
};

export type BehaviorNotification = ReturnType<typeof createBehaviorNotification>;