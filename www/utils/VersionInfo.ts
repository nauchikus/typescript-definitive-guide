export interface IVersion {
  major: string;
  minor: string;
  patch: string;
  mmp: string;
  preReleaseName: string;
  preReleaseVersion: string;
  updateVersion: string;
  version: string;
}

export class VersionInfo {
  static parse ( version: string ): IVersion {
    let [, mmp = ``, preReleaseAndUpd = ``] = /([\w|.]*)(?:-?)?(.*)/gi.exec( version ) || [];
    let [major, minor = ``, patch = ``] = mmp.split( "." );

    let [preRelease = ``, updateVersion = ``] = preReleaseAndUpd
        .split(`_`)
        .filter(Boolean);

    preRelease = preRelease.length ? preRelease.substring(1) : preRelease;



    let [, preReleaseName = ``, preReleaseVersion = ``] = /([^\d]+)(\d+)?/gi.exec( preRelease ) || [undefined, `release`, ``];


    return {
      major,
      minor,
      patch,
      mmp,
      preReleaseName,
      preReleaseVersion,
      updateVersion,
      version,
    };
  }

  get version(){
    return this.versionInfo.version;
  }
  get major () {
    return this.versionInfo.major;
  }

  get minor () {
    return this.versionInfo.minor;
  }

  get patch () {
    return this.versionInfo.patch;
  }

  get mmp () {
    return this.versionInfo.mmp;
  }

  get preReleaseName () {
    return this.versionInfo.preReleaseName;
  }

  get preReleaseVersion () {
    return this.versionInfo.preReleaseVersion;
  }
  get updateVersion () {
    return this.versionInfo.updateVersion;
  }


  private readonly versionInfo: IVersion;

  constructor ( version: string ) {
    this.versionInfo = VersionInfo.parse( version );
  }

  toInfo () {
    return { ...this.versionInfo };
  }
}
