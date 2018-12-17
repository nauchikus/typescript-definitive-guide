import { ISignalHandler } from './ISignalHandler';

export default class Signal<Event = void> {
    private handlerAll: ISignalHandler<Event>[] = [];

    public add = (handler: ISignalHandler<Event>): void => {
        this.handlerAll.push(handler);
    };
    public remove = (handler: ISignalHandler<Event>): void => {
        let index: number = this.handlerAll.indexOf(handler);

        if (index > -1) {
            this.handlerAll.splice(index, 1);
        }
    };

    public dispatch = (event?: Event): Event | undefined => {
        if (!this.handlerAll.length) {
            return;
        }

        let cloneHandlerAll: ISignalHandler<Event>[] = this.handlerAll.concat();

        for (let i = 0; i < cloneHandlerAll.length; i++) {
            cloneHandlerAll[i](event);
        }

        return event;
    };
}
