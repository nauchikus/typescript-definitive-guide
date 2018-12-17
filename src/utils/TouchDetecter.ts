export enum ScreenControls {
    Touch = 'touch',
    Hover = 'hover'
}
export default class TouchDetecter {
    public static isTouch = () =>
        'ontouchstart' in window ? ScreenControls.Touch : ScreenControls.Hover;
}
