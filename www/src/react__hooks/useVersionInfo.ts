import { createContext, useContext } from "react";
import { Version } from "../utils/Version";

export type VersionInfo = ReturnType<typeof Version.prototype.toInfo>
export const VersionInfoContext = createContext<VersionInfo | null>(null);

export const useVersionInfo = () => useContext(VersionInfoContext) as VersionInfo;
