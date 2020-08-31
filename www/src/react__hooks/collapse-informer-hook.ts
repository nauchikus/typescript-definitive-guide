import * as AppUtils from "../utils/app-utils";

export enum InformerRotatorVisibleState {
  VisibleMinimalisticBanner='minimalistic',
  VisibleMaximumBanner='maximum',
  HiddenBanner='hidden',
}
export enum InformerId {
  EmptyInformer="emptyInformer",
  DonateInformer="donateInformer",
  WinSearchCopywritersInformer="winSearchCopywritersInformer",
}



class InformerLocalStorageBrowserService {
  public static readonly APP_COLLAPSE_INFORMER_STORE_NAME = `appInformerRotatorState`;

  public static isLocalStorageNeededInInit = () => {
    if ( AppUtils.isBrowser() && !localStorage.hasOwnProperty( InformerLocalStorageBrowserService.APP_COLLAPSE_INFORMER_STORE_NAME ) ) {
      return true;
    }

    return false;
  };
  public static getInformerStorage = ():InformerLocalStorage => JSON.parse(
    localStorage.getItem( InformerLocalStorageBrowserService.APP_COLLAPSE_INFORMER_STORE_NAME ) as string
  );
  public static getInformerAll = () => InformerLocalStorageBrowserService.getInformerStorage().informers;

  public static update = ( state: InformerLocalStorage ) => {
    localStorage.setItem(
      InformerLocalStorageBrowserService.APP_COLLAPSE_INFORMER_STORE_NAME,
      JSON.stringify( state )
    );
  };
  public static updateInformerAll=(informerAll:Informer[])=>{
    InformerLocalStorageBrowserService.update( {
      ...InformerLocalStorageBrowserService.getInformerStorage(),
      informers: informerAll
    } );
  }
}

class InformerLocalStorageServerService {
  public static readonly DEFAULT_VERSION = NaN;
  public static readonly APP_COLLAPSE_INFORMER_STORE_NAME = `appInformerRotatorState`;

  public static isLocalStorageNeededInInit = () => {
    return false;
  };
  public static getInformerStorage = ():InformerLocalStorage => ({
    version: InformerLocalStorageServerService.DEFAULT_VERSION,
    informers: []
  });
  public static getInformerAll = () =>
    InformerLocalStorageServerService.getInformerStorage().informers;

  public static update = ( state: InformerLocalStorage ) => {};
  public static updateInformerAll=(informerAll:Informer[])=>{}
}


class InformerLocalStorageService {
  private static concreteService = AppUtils.isBrowser() ?
    InformerLocalStorageBrowserService :
    InformerLocalStorageServerService;

  public static readonly APP_COLLAPSE_INFORMER_STORE_NAME = `appInformerRotatorState`;

  public static isLocalStorageNeededInInit = () => {
    return InformerLocalStorageService.concreteService.isLocalStorageNeededInInit();
  };
  public static getInformerStorage = (): InformerLocalStorage =>
    InformerLocalStorageService.concreteService.getInformerStorage();
  public static getInformerAll = () =>
    InformerLocalStorageService.concreteService.getInformerAll();

  public static update = (state: InformerLocalStorage) =>
    InformerLocalStorageService.concreteService.update(state);
  public static updateInformerAll = (informerAll: Informer[]) =>
    InformerLocalStorageService.concreteService.updateInformerAll(informerAll);
}

class InformerRotatorInitializator {
  public static readonly HIDDEN_BANNER_DISPLAY_INTERVAL_IN_DAY = 3;

  private static INFORMER_ALL = [
    { id: InformerId.DonateInformer, nextShowDate: 0, lastShowDate: 0 },
    { id: InformerId.WinSearchCopywritersInformer, nextShowDate: 0, lastShowDate: 0 },
  ];
  private static getDefaultInformerLocalStorage = () => ( {
    version:0,
    informers: InformerRotatorInitializator.INFORMER_ALL
  } );
  private static isActiveInformer = ( informerData: Informer ) => {
    let currentDate = Date.now();

    return informerData.nextShowDate - currentDate <= 0;
  };
  private static sortByDateNextShow = ( a: Informer, b: Informer ) => a.lastShowDate - b.lastShowDate;


  private static updateInformerAll = (informerAll:Informer[] ) => {
    let actualInformerAll = informerAll
      .filter( InformerRotatorInitializator.isActiveInformer )
      .sort( InformerRotatorInitializator.sortByDateNextShow );
    let [currentInformerData] = actualInformerAll

    if ( !currentInformerData ) {
      return;
    }

    currentInformerData.lastShowDate = Date.now();

    return actualInformerAll;
  };

  public static getActiveInformer = () => {
    if ( AppUtils.isBrowser() && InformerLocalStorageService.isLocalStorageNeededInInit() ) {
      InformerLocalStorageService.update(
        InformerRotatorInitializator.getDefaultInformerLocalStorage()
      );
    }

    let informerAll = InformerRotatorInitializator.updateInformerAll(
      InformerLocalStorageService.getInformerAll()
    );

    if ( informerAll ) {
      InformerLocalStorageService.updateInformerAll( informerAll );
    }

    let [activeInformer] = informerAll ?? [null];


    return activeInformer;
  };
  public static changeShowDateInformerById=(id:InformerId)=>{
    let informerAll=InformerLocalStorageService.getInformerAll();
    let currentInformer = informerAll.find( informer => informer.id === id );

    if ( !currentInformer ) {
      throw new Error( `Informer with id "${ id }" not found.` );
    }

    let nextShowDate = new Date();
    nextShowDate.setDate(
      nextShowDate.getDate() +
      InformerRotatorInitializator.HIDDEN_BANNER_DISPLAY_INTERVAL_IN_DAY
    );

    currentInformer.nextShowDate = nextShowDate.getTime();

    InformerLocalStorageService.updateInformerAll( informerAll );
  }
}

type InformerRotatorState = {
  currentInformerId:InformerId;
  currentInformerState:InformerRotatorState;
  isInformerActive:boolean;
};
type InformerLocalStorage = {
  version:number;
  informers:Informer[];
};
type Informer = {
  id:InformerId;
  nextShowDate:number;
  lastShowDate:number;
}

export const createInformerRotator = () => {
  let activeInformer = InformerRotatorInitializator.getActiveInformer();

  let currentInformerId: InformerId = activeInformer?.id ?? InformerId.EmptyInformer;
  let currentInformerState: any = activeInformer ?
    InformerRotatorVisibleState.VisibleMinimalisticBanner :
    InformerRotatorVisibleState.HiddenBanner;



  return {
    currentInformerId,
    currentInformerState,
    get isInformerActive () {
      return this.currentInformerState !== InformerRotatorVisibleState.HiddenBanner;
    },
    activateMaximumStateBannerСurrentInformer () {
      this.currentInformerState = InformerRotatorVisibleState.VisibleMaximumBanner;
    },
    activateMinimalisticStateBannerСurrentInformer () {
      this.currentInformerState = InformerRotatorVisibleState.VisibleMinimalisticBanner;
    },
    closeCurrentInformer () {
      if ( this.currentInformerState === InformerRotatorVisibleState.HiddenBanner ) {
        return;
      }


      InformerRotatorInitializator.changeShowDateInformerById(
        this.currentInformerId
      );
      this.currentInformerState = InformerRotatorVisibleState.HiddenBanner;
    }
  };
};

export type InformerRotator = ReturnType<typeof createInformerRotator>;

