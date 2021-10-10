import {observable} from "mobx";
import {createToggle} from "./Toggle";
import {createContext, useContext} from "react";




export const createSharedStore = () => observable({
    appDriverToggle: createToggle(false)
});

export const SharedStoreContext = createContext(createSharedStore());
export const useSharedStore = () => useContext(SharedStoreContext);