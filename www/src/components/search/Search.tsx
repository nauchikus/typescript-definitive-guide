import React, { FC, FormEvent, useRef } from "react";
import { MagnifierSvgIcon, SearchSvgIcon } from "../icon__svg-icon/svg-icons";
import { useShareStores } from "../../mobx";
import { observer } from "mobx-react-lite";
import { OutsideClick } from "../outside-click/OutsideClick";
import { ScaleButton } from "../button__scale-button/ScaleButton";
import { useScale, useScaleControl } from "../transform__scale-container/ScaleContainer";
import { useTranslator } from "../../react__hooks/translator.hook";
import { LocalizationPaths, SharedLayoutLocalization } from "../../localization";
import { If } from "../if-operator/If";

interface ISearchProps {
}

const SCALE_CONTROL_ID = "app-search";

export const Search: FC<ISearchProps> = observer(( {} ) => {
  let [shared] = useTranslator<[SharedLayoutLocalization]>( LocalizationPaths.SharedLayout );
  let { appHeader: {appSearch:appSearchTranslation} } = shared;
  let { appSearch } = useShareStores();
  let control = useScaleControl(SCALE_CONTROL_ID);
  let inputRef = useRef<HTMLInputElement>(null);

  const isStringEmpty = ( string: string ) => string.trim() === "";
  const isInputEmpty = () => {
    let { current: input } = inputRef;
    let value = input?.value ?? "";

    return isStringEmpty(value) ? true : false;
  };
  const toggle = () => {
    appSearch.active.toggle();

    if ( appSearch.active.isClose && !isInputEmpty() ) {
      cleanInput();
    }

    if ( appSearch.match.isOn ) {
      appSearch.match.off();
    }
  };
  const cleanInput = () => {
    let { current: input } = inputRef;

    input && ( input.value = "" );
  };
  const onChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    let isInputEmptyValid = isStringEmpty( event.target.value );

    if ( isInputEmptyValid && appSearch.match.isOn ) {
      appSearch.match.off();
    } else if ( !isInputEmptyValid && appSearch.match.isOff ) {
      appSearch.match.on();
    }
  };
  const formSubmit = ( event: React.FormEvent | React.KeyboardEvent ) => {
    event.preventDefault();

    control?.on();

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



  /*appSearch.active.state*/

  return (
    <div className="search_wrapper" toggle={appSearch.active.isToggle.toString()}>
      <OutsideClick isToggle={appSearch.active.isToggle} onOutsideClick={toggle}/>
      <form className="search"
            autoComplete="off"
            action="#"
            toggle={appSearch.active.state}
            is-match={appSearch.match.isToggle.toString()}
            onKeyDown={onKeyDown}
            onSubmit={onSubmit}>
        <div className="search__input-section">
          <input ref={inputRef}
                 className="search__query-input"
                 type="search"
                 id="search-input"
                 name="app-search-query"
                 placeholder={appSearchTranslation.inputPlaceholder}
                 onChange={onChange}
                 required/>

          <ScaleButton className="search__submit-button-placeholder button-with-svg-icon" onClick={toggle}>
            <MagnifierSvgIcon className="search__search-svg-icon"/>
          </ScaleButton>

          <ScaleButton className="search__submit-button button-with-svg-icon"
                       scaleControlId={SCALE_CONTROL_ID}
                       type="submit"
                       aria-hidden="true"
                       aria-label={appSearchTranslation.submitButton.ariaLabel}>
            <MagnifierSvgIcon className="search__search-svg-icon"/>
          </ScaleButton>
        </div>



        <If condition={appSearch.match.isToggle && appSearch.active.isOpen}>
          <div className="divide_x"></div>
          <div className="search__output-section">

          </div>
        </If>
      </form>
    </div>

  );
});