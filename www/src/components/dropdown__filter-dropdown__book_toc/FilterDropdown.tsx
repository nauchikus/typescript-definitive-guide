import React, { FC, ReactElement, useEffect, useState } from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownToggle } from "../dropdown/DropdownToggle";
import { IconButton, Size } from "../icon-button/IconButton";
import { FilterListSvgIcon } from "../icon__svg-icon/svg-icons";
import { Tooltip, TooltipPosition } from "../tooltip/Tooltip";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { useTranslator } from "../../react__hooks/translator.hook";
import { BookTocGuiLocalization, LocalizationPaths } from "../../localization";
import { Media } from "../media/Media";
import { BookTocTagBar } from "../book-toc-tag-bar/BookTocTagBar";
import { useCssPropertyAsNumber } from "../../react__hooks/media-hook";
import { CssPropertyName } from "../../CssPropertyName";


interface IBookTocFilterDropdownProps {
}

export const BookTocFilterDropdown: FC<IBookTocFilterDropdownProps> = () => {
  let [t] = useTranslator<[BookTocGuiLocalization]>( LocalizationPaths.BookChaptersPageGui );

  return (
    <Dropdown className="bt-filter-dropdown filter-dropdown">
      <DropdownToggle>
        <IconButton size={ Size.SM }>
          <FilterListSvgIcon/>
          <Tooltip position={ TooltipPosition.BottomCenter }>
            { t.secondaryContentBar.tocFilterButton.tooltip }
          </Tooltip>
        </IconButton>
      </DropdownToggle>
      <DropdownMenu className="bt-filter-dropdown__menu filter-dropdown__menu content__control-bar-dropdown-item"
                    openClassName="filter-dropdown__menu_open-state"
                    closeClassName="filter-dropdown__menu_close-state">
        <div className="bt-filter-dropdown__card card">
          <header className="card__header">
            <span className="card-header__title">
              Фильтр разделов
            </span>
          </header>
          <div className="card__content">
            <div className="scroll-wrapper">
              <BookTocTagBar/>
            </div>
          </div>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};