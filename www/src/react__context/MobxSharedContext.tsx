import { createContext } from "react";
import { UseSharedMobxEntry } from "../stores/SharedPageMobxEntry";

export const MobxSharedContext = createContext<UseSharedMobxEntry | null>( null );
