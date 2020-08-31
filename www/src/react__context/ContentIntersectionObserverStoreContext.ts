import { createContext, useContext } from "react";
import { IntersectionObserverStore } from "../stores/IntersectionObserverStore";

export const ContentIntersectionObserverStoreContext = createContext<IntersectionObserverStore | null>( null );
export const useContentIntersectionObserverStore = () => useContext( ContentIntersectionObserverStoreContext ) as IntersectionObserverStore;