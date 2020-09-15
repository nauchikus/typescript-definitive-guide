import React, { FC, FormEvent, useRef } from "react";

interface ISearchProps {
}


export const TemporarySearch: FC<ISearchProps> = ({} ) => {
  return (
    <form id="search-form" className="search">
      <input className="search__input"
             type="text"
             id="algolia-search"
             placeholder="Поиск..."/>
    </form>
  );
};
