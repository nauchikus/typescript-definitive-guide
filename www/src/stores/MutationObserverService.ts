import { Observable, Subject } from "rxjs";
import { share } from "rxjs/operators";


export class MutationObserverService{
  private observer:MutationObserver;
  private config: MutationObserverInit = {
    attributes: false,
    subtree: false,
    childList: true
  };
  private subject = new Subject();
  private observable = this.subject
    .asObservable()
    .pipe(
      share()
    );

  constructor ( private targetSelector: string ) {
    this.observer = new MutationObserver( this.callback );
  }

  private callback: MutationCallback = () => {
    this.subject.next();
  };
  public observe = () => {
    let node = document.querySelector( this.targetSelector );


    if ( !node ) {
      throw new Error( `Dom node with selector "${ this.targetSelector }" not exists.` );
    }


    this.observer.observe( node, this.config );
    this.subject.next();
  };
  public unobserve = () => {
    this.observer.disconnect();
    this.subject.complete();
  };

  public getObservable():Observable<unknown>{
    return this.observable;
  }
}