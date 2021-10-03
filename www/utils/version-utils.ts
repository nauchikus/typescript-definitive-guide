import { VersionInfo } from "./VersionInfo";
import {WinMetadata} from "../pages/what-is-new";

export const toLastVersion = (metadata: WinMetadata) =>
    new VersionInfo(metadata.releaseHistory[0].version);
