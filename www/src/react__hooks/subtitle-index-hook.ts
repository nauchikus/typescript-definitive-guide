import { LocalStorageKey } from "../enums/LocalStorageKey";

export const useSubtitleIndex = (length:number) => {
  let currentIndex = 0;

  if ( window ) {
    let prevIndex = window.localStorage.getItem( LocalStorageKey.SubtitleIndexIndexPage ) ?? "-1";
    currentIndex = parseInt( prevIndex ) + 1;
    currentIndex = currentIndex >= length ? 0 : currentIndex;

    window.localStorage.setItem( LocalStorageKey.SubtitleIndexIndexPage, currentIndex.toString() );
  }

  return currentIndex;
};