import React, { FC, ReactElement } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { IconButton, Size } from "../icon-button/IconButton";
import { FilterListSvgIcon } from "../icon__svg-icon/svg-icons";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";

interface IFilterDropdownProps {
  children: ReactElement | ReactElement[];
}

export const FilterDropdown:FC<IFilterDropdownProps>=({children})=>{
  return(
    <Dropdown className="filter-dropdown">
      <DropdownToggle>
        <IconButton size={Size.SM}>
          <FilterListSvgIcon/>
          <Tooltip position={TooltipPosition.BottomCenter}>
            Фильтр версий
          </Tooltip>
        </IconButton>
      </DropdownToggle>
      <DropdownMenu className="filter-dropdown__menu content__control-bar-dropdown-item"
                    openClassName="filter-dropdown__menu_open-state"
                    closeClassName="filter-dropdown__menu_close-state">
        {children}
      </DropdownMenu>
    </Dropdown>
  );
}