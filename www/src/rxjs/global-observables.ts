import {fromEvent, Observable} from "rxjs";
import {share} from "rxjs/operators";

export class GlobalObservables {
    private static instance: GlobalObservables;
    private static getInstance(){
        if (!GlobalObservables.instance) {
            GlobalObservables.instance = new GlobalObservables();
        }

        return GlobalObservables.instance;
    }


    static get resizeGlobalObserver(){
        return GlobalObservables.getInstance().resizeGlobalObserver;
    }
    static get scrollGlobalObserver(){
        return GlobalObservables.getInstance().scrollGlobalObserver;
    }



    readonly resizeGlobalObserver:Observable<Event>;
    readonly scrollGlobalObserver:Observable<Event>;

    constructor() {
        this.resizeGlobalObserver = fromEvent(window, `resize`).pipe(share());
        this.scrollGlobalObserver = fromEvent(window, `scroll`).pipe(share());
    }
}
