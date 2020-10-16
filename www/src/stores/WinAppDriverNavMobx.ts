import { action, computed, decorate, observable } from "mobx";
import { RouterStore } from "./RouterStore";
import { DriverNavMobx } from "./DriverNavMobx";
import { RouterUtils } from "../utils/router-utils";
import { VersionFilterStore } from "./VersionFilterStore";
import { ContentSectionWithFilterStore } from "./ContentSectionWithFilterStore";



export class WinAppDriverNavMobx {
  private static hasPageNavLinkActive = (currentSectionId: string, anchor: string) => {
    return anchor === currentSectionId;
  };


  public driverNavLinkDataAll;

  constructor(
    private driverNav: DriverNavMobx,
    private router: RouterStore,
    private versionFilter: VersionFilterStore,
    private contentSection: ContentSectionWithFilterStore) {

    const update = () => {
      this.driverNavLinkDataAll = this.generateDriverNavLinkDataAll();
    }

    this.driverNavLinkDataAll = this.generateDriverNavLinkDataAll();

    console.log(this.versionFilter.length, this.versionFilter.checkedLength);
    computed(() => this.versionFilter.checkedLength).observe(update);
    computed(() => this.router.hash).observe(update);
    computed(() => this.contentSection.currentSectionId).observe(update);
  }

  private generateDriverNavLinkDataAll = () => {
    return this.driverNav.navItemAll?.map( ( { name, path, anchor, version }, index ) => ( {
      name,
      path: RouterUtils.whatIsNewRoutes.getWhatIsNewRoute({
        version:this.router.pageName,
        innovation: anchor
      }),
      isActive: WinAppDriverNavMobx.hasPageNavLinkActive( this.contentSection.currentSectionId, anchor ),
      disabled: !this.versionFilter.isCheckedByVersion( version ),
      activeClassName: "app-driver__link_page-nav-item_active"
    } ) );
  }

}


decorate(WinAppDriverNavMobx, {
  driverNavLinkDataAll: observable,
});
