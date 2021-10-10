import {observable} from "mobx";

export const createToggle = (initialState: boolean = false) => observable({
    isToggle: initialState,
    get isOpen() {
        return this.isToggle;
    },
    get isClose() {
        return !this.isToggle;
    },
    toggle() {
        this.isToggle = !this.isToggle;
    },
    open() {
        this.isToggle = true;
    },
    close() {
        this.isToggle = false;
    }
});

