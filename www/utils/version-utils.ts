import { VersionInfo } from "./VersionInfo";
import { WinMetadata } from "../models/WinMetadata";

export const toLastVersion = (metadata: WinMetadata) =>
    new VersionInfo(metadata.releaseHistory[0].version);
