// export type ReleaseInfo=ReturnType<typeof Version.parse>

class Version {
  /**
   *
   * @param version{string}
   * @returns {{patch: string, mmp: string, preReleaseVersion: string, major: string, minor: string, preReleaseName: string, updateVersion: string}}
   */
  static parse ( version ) {
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
   * @returns {string}
   */
  get updateVersion () {
    return this.versionInfo.updateVersion;
  }


  /**
   *
   * @param version{string} 1.2.3@alpha4+5
   */
  constructor ( version ) {
    // @private
    this.versionInfo = Version.parse( version );
  }

  /**
   *
   * @returns {{patch: string, mmp: string, preReleaseVersion: string, major: string, minor: string, preReleaseName: string, updateVersion: string}}
   */
  toInfo () {
    return { ...this.versionInfo };
  }
};


module.exports = { Version };
