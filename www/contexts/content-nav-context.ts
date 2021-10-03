import React, {createContext, useContext} from "react";
import type {useContentNavStore} from "../stores/use-content-nav-store";
import {UseContentNav} from "../stores/use-content-nav-store";



export const ContentNavContext = createContext<UseContentNav>({} as UseContentNav);


/// TODO: [refactoring] move it here definition SharedContext
export const useContentNav = (): UseContentNav => useContext<UseContentNav>(ContentNavContext);