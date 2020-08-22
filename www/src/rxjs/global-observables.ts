import {fromEvent} from "rxjs";
import {share} from "rxjs/operators";

export class GlobalObservables {
    static readonly resizeGlobalObserver = fromEvent( window, `resize` ).pipe( share() );
    static readonly scrollGlobalObserver = fromEvent( window, `scroll` ).pipe( share() );
}
