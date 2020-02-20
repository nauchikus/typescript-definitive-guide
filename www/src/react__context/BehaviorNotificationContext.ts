import { createContext, useContext } from "react";
import { IPageNavData } from "../types/IPageNavData";
import { BehaviorNotification } from "../stores/PageNavStore";

export const BehaviorNotificationContext = createContext<BehaviorNotification | null>( null );
export const useBehaviorNotification = () => useContext( BehaviorNotificationContext ) as BehaviorNotification;