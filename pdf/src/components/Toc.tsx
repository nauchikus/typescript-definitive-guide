import React, {FC} from "react";
import {default as cn} from "classnames";
import {ChapterInfo, TocData} from "../create-book-data";


type TocProps = {
    toc: TocData[];
}


export const Toc: FC<TocProps> = ( { toc } ) => {
  const items = toc.map( ( { index, title, elementId, level } ) => {

    // const toAnchor = ( path: string ) => `#${ path }`;
    // let href = toAnchor( index ).replace(`.`, `_`);

    let href = `#` + index


    return (
      <li key={ index } className={ cn( `toc-nav__tree-item`, `tree-item_level-${ level }` ) }>
        <a className="toc__link" href={ href }>
          <span href={ href } className="toc__link_title"></span>
          <span className="toc__link_dots"></span>
          <span href={ href } className="toc__link_index"></span>
        </a>
      </li>
    );
  } );

  return (
    <aside id="toc">
      <h2 className="toc__title">Содержание</h2>
      <nav className="toc__nav">
        <ol className="toc-nav__tree">
          { items }
        </ol>
      </nav>
    </aside>
  );
};
