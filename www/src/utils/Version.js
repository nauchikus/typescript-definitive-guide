// export type ReleaseInfo=ReturnType<typeof Version.parse>

class Version {
  /**
   *
   * @param version{string}
   * @returns {{patch: string, mmp: string, preReleaseVersion: string, major: string, minor: string, preReleaseName: string}}
   */
  static parse ( version ) {
    let [, mmp = ``, preRelease = ``] = /([\w|.]*)(?:-?)?(.*)/gi.exec( version ) || [];
    let [major, minor = ``, patch = ``] = mmp.split( "." );
    let [, preReleaseName = ``, preReleaseVersion = ``] = /([^\d]+)(\d+)?/gi.exec( preRelease.substring(1) ) || [undefined, `release`, ``];


    return {
      major,
      minor,
      patch,
      mmp,
      preReleaseName,
      preReleaseVersion,
      version,
    };
  }

  get version(){
    return this.versionInfo.version;
  }
  /**
   *
   * @returns {string}
   */
  get major () {
    return this.versionInfo.major;
  }

  /**
   *
   * @returns {string}
   */
  get minor () {
    return this.versionInfo.minor;
  }

  /**
   *
   * @returns {string}
   */
  get patch () {
    return this.versionInfo.patch;
  }

  /**
   *
   * @returns {string}
   */
  get mmp () {
    return this.versionInfo.mmp;
  }

  /**
   *
   * @returns {string}
   */
  get preReleaseName () {
    return this.versionInfo.preReleaseName;
  }

  /**
   *
   * @returns {string}
   */
  get preReleaseVersion () {
    return this.versionInfo.preReleaseVersion;
  }


  /**
   *
   * @param version{string}
   */
  constructor ( version ) {
    // @private
    this.versionInfo = Version.parse( version );
  }

  /**
   *
   * @returns {{patch: string, mmp: string, preReleaseVersion: string, major: string, minor: string, preReleaseName: string}}
   */
  toInfo () {
    return { ...this.versionInfo };
  }
};


module.exports = { Version };
