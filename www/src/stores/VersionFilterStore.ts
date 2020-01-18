export const createVersionFilterStore = () => {
  return {
    versions: [] as string[],
    addVersion ( ...versions: string[] ) {
      versions.forEach( version => this.versions.push( version ) );
    },
    removeVersion ( ...versions: string[] ) {
      versions.forEach( version => this.versions.splice(
        this.versions.indexOf( version ), 1
        )
      );
    },
    clean () {
      this.versions.length = 0;
    },
    has ( version: string ) {
      return this.versions.length === 0 || this.versions.includes( version );
    }
  };
};