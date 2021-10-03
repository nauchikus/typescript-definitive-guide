import React, { FC, FormEvent, useCallback, useImperativeHandle, useRef } from "react";
import { observer } from "mobx-react-lite";
import {MagnifierIcon} from "../icons/icons";

interface ISearchProps {
}

const SCALE_CONTROL_ID = "app-search";

export const Search: FC<ISearchProps> = observer(( {} ) => {
  let inputRef = useRef<HTMLInputElement|null>(null);

  const isStringEmpty = ( string: string ) => string.trim() === "";
  const isInputEmpty = () => {
    let { current: input } = inputRef;
    let value = input?.value ?? "";

    return isStringEmpty(value) ? true : false;
  };
  const cleanInput = () => {
    let { current: input } = inputRef;

    input && ( input.value = "" );
  };
  const formSubmit = ( event: React.FormEvent | React.KeyboardEvent ) => {
    event.preventDefault();

    setTimeout( () => inputRef.current?.focus(), 10 );
  };

  const onSubmit = ( event: React.FormEvent ) => {
    formSubmit( event );
  };
  const onKeyDown = ( event: React.KeyboardEvent ) => {
    if ( event.key === "Enter" ) {
      formSubmit(event);
    }
  };

  const input_blurHandler = useCallback((event: FormEvent<HTMLInputElement>) => {
    // (event.target as HTMLInputElement).
  }, []);



  return (
    <form className="search"
          autoComplete="off"
          action="#"
      // onKeyDown={onKeyDown}
          onSubmit={onSubmit}>
      <button className="search__submit-button-placeholder button-with-svg-icon">
        <MagnifierIcon className="search__search-svg-icon"/>
      </button>
      <input ref={inputRef}
             className="search__query-input"
             type="search"
             id="algolia-search"
             name="app-search-query"
             // onBlur={input_blurHandler}
             placeholder="search..."
             required/>
    </form>

  );
});
