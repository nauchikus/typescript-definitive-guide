export interface InnovationMetadata {
  "id": string;
  "version": string;
  "innovationName": string;
  "dateRelease": string;
  "datePublication": string;
  "tags": string[];
}
export interface VersionMetadata {
  "version": string;
  "dateRelease": string;
  "datePublication": string;
}
export interface WinMetadata {
  "releaseHistory": VersionMetadata[];
  "colors": {
    "bookCoverColors": {
      "--color_light": string;
      "--color_middle-lite": string;
      "--color_accent": string;
      "--color_ambient": string;
    },
    "bookUpdateCurrentVersionCoverColors": {
      "--color": string;
    }
  };
  "innovations": InnovationMetadata[];
}