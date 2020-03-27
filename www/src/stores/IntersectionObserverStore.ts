import { fromEvent, merge, Subject, Subscription } from "rxjs";
import { share, tap } from "rxjs/operators";
import { IObservableArray, observable } from "mobx";
import { MutationObserverService } from "./MutationObserverService";


export const resizeGlobalObserver = fromEvent( window, `resize` ).pipe( share() );
export const scrollGlobalObserver = fromEvent( window, `scroll` ).pipe( share() );

const getAppContentSections = ({containerSelector,sectionSelector}:IContentSelector) => document
  ?.querySelector( containerSelector )
  ?.querySelectorAll( sectionSelector );

export interface IIntersectionObserverEntryInfo {
  sectionId:string;
  isIntersecting: boolean;
}

interface IContentSelector{
  containerSelector:string;
  sectionSelector:string;
}
interface ICreateIntersectionObserverStoreParams extends IContentSelector{
}

export const createIntersectionObserverStore = ({...selectors}:ICreateIntersectionObserverStoreParams) => {
  let intersectionObserver: IntersectionObserver | null = null;
  let resizeSubscription: Subscription | null = null;

  let mutationObserver:MutationObserverService;
  let mutationObserverSubscription:Subscription;


  const getRootMargin = () => {
    let contentTopOffset = parseInt(
      getComputedStyle( document.documentElement )
        .getPropertyValue( `--app-header_height` )
    );
    let marginTop = contentTopOffset / document.documentElement.clientHeight;


    let marginBottom = 100 - ( marginTop / document.documentElement.clientHeight * 100 );
    return `-${ marginTop }px 0px -${ marginBottom }% 0px`;
  };

  const getOptions = () => ( {
    rootMargin: getRootMargin()
  } );

  const createIntersectionObserver = () => intersectionObserver = new IntersectionObserver(
    intersectionObserverCallback,
    getOptions()
  );
  const observe = () => {
    intersectionObserver?.disconnect();


    if ( resizeSubscription === null ) {
      resizeSubscription = resizeGlobalObserver.subscribe(
        createIntersectionObserver
      );
    }


    createIntersectionObserver();

    getAppContentSections( selectors )
      ?.forEach( section => intersectionObserver?.observe( section ) );
  };
  const unobserve = () => {
    intersectionObserver?.disconnect();
    intersectionObserver = null;

    resizeSubscription?.unsubscribe();
  };

  const init = () => {
    mutationObserver = new MutationObserverService( selectors.containerSelector );

    mutationObserverSubscription = mutationObserver.getObservable()
    .subscribe( { next: observe, error:error=>console.error(error),complete: unobserve } );

    mutationObserver.observe();
  };
  const destroy = () => {
    mutationObserver.unobserve();
    mutationObserverSubscription.unsubscribe();
  };



  let store = observable.object( {
    intersections: [] as IIntersectionObserverEntryInfo[],
    init,
    destroy,
  } );


  const intersectionObserverCallback: IntersectionObserverCallback = entries => {
    store.intersections.splice( 0, store.intersections.length, ...entries.map( entry => ( {
      sectionId: entry.target.id,
      isIntersecting: entry.isIntersecting
    } ) ) );
  };


  return store
};

export type IntersectionObserverStore = ReturnType<typeof createIntersectionObserverStore>;
