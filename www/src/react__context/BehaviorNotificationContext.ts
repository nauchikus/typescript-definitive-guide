import { createContext, useContext } from "react";
import { BehaviorNotification } from "../stores/behavior-notificaion-store";

export const BehaviorNotificationContext = createContext<BehaviorNotification | null>( null );
export const useBehaviorNotification = () => useContext( BehaviorNotificationContext ) as BehaviorNotification;