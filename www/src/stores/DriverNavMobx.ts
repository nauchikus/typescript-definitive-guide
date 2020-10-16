import { action, computed, decorate, observable } from "mobx";
import * as WinTocVersionUtils from "../utils/win-toc-version-utils";
import { RouterStore } from "./RouterStore";
import { CollapseTreeMobxStore } from "./CollapseTreeMobxStore";
import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { Version } from "../utils/Version";



export class DriverNavMobx {
  get currentInnovationAll(){
    return this.collapseToc.tree
      .find(item => {
        let version = new Version(item.data.releaseHistory[0].version);


        return version.mmp === this.router.pageName;
      })
      ?.data.innovations;
  }

  get navItemAll(){
    return this.currentInnovationAll?.map(innovation => ({
      path: innovation.path,
      name: innovation.innovationName,
      anchor: innovation.path,
      version: innovation.version
    }));
  }

  constructor(
    private router: RouterStore,
    private collapseToc: CollapseTreeMobxStore<IWhatIsNewToc>) {
  }

}


decorate(DriverNavMobx, {
  currentInnovationAll: computed,
  navItemAll: computed,
});
