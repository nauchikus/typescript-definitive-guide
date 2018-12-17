export interface IListenerInfo {
    type: string;
    target: Node;
    handler: () => void;
}

export default class ListenerInfoCollection {
    private infoAll: IListenerInfo[] = [];

    public add = (info: IListenerInfo) => this.infoAll.push(info);
    public remove = (info: IListenerInfo) => {
        let removedInfo = this.infoAll.find(
            item =>
                item.type === info.type &&
                item.target === info.target &&
                item.handler === info.handler
        );

        if (removedInfo) {
            let index = this.infoAll.indexOf(removedInfo);
            this.infoAll.splice(index, 1);
            this.unlistening(removedInfo);
        }
    };
    public unlistening = ({ type, target, handler }: IListenerInfo) => {
        target.removeEventListener(type, handler);
    };

    public destroy = () => {
        this.infoAll.forEach(this.remove);
    };
}
