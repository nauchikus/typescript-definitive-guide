import { createContext } from "react";
import { UseSharedMobxEntry } from "../mobx__entry/SharedPageMobxEntry";

export const MobxSharedContext = createContext<UseSharedMobxEntry | null>( null );
