import React, { FC, FormEvent, useRef } from "react";

interface ISearchProps {
}

const SCALE_CONTROL_ID = "app-search";

export const TemporarySearch: FC<ISearchProps> = ({} ) => {
  return (
    <form className="search">
      <input className="search__input"
             type="search"
             id="algolia-search"
             name="app-search-query"
             placeholder="Поиск..."/>
    </form>
  );
};
