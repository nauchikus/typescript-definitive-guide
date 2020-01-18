import React, { FC, ReactNode, useEffect, useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { IconButton } from "../icon-button/IconButton";
import { FilterListSvgIcon } from "../icon__svg-icon/svg-icons";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { useWhatIsNewStores } from "../../mobx/MobxWhatIsNewProvider";
import { useWinData } from "../../react__hooks/win-data-hook";
import { useVersionFilter } from "../../stores/what-is-new-stores";
import { useRouter } from "../../react__hooks/router-hook";
import { Checkbox } from "../ui__checkbox/Checkbox";
import { CheckboxLabel } from "../ui__checkbox/CheckboxLabel";

interface IWinDropdownMenuFilterDropdownProps {

}

export const WinDropdownMenuFilterDropdown: FC<IWinDropdownMenuFilterDropdownProps> = ( {} ) => {
  let contentData = useWinData();
  let router = useRouter();
  let versionFilter = useVersionFilter();

  let [versionAll, setVersionAll] = useState<string[]>( [] );


  useEffect( () => {
    let versions = contentData.innovations
      .reduce( ( set, innovation ) =>
        set.add( innovation.version ), new Set<string>()
      );
    setVersionAll( Array.from( versions ) );
    // let versionAll = contentData.innovations
    //   .map( innovation => innovation.version );

    // versionFilter.clean();
    // versionFilter.addVersion( ...versionAll );
  }, [router.basepath] );

  let listItemAll = versionAll.map( version => (
    <li className="list-item">
      <Checkbox id={version} checked={ versionFilter.has( version ) }/>
      <CheckboxLabel id={version}>{version}</CheckboxLabel>
    </li>
  ) );

  return (
    <div className="win-filter-dropdown__dropdown-menu">
      <ul className="list">
        { listItemAll }
      </ul>
    </div>
  );
};