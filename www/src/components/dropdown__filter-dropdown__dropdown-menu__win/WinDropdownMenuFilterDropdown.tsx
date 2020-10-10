import React, { FC } from "react";
import { Checkbox, CheckedEvent } from "../ui__checkbox/Checkbox";
import { Radio } from "../ui__radio/Radio";
import { Label } from "../ui__label/Label";
import { RadioGroup } from "../ui__radio-group/RadioGroup";
import { CheckboxIconGroup } from "../ui__checkbox/CheckboxIconGroup";
import { observer } from "mobx-react-lite";
import { InputModel } from "../../stores/CheckboxStore";
import { ReleaseInfo, VersionInfoMeta } from "../../transformers/innovationDataToVersionInfoTransformer";
import { useVersionFilter } from "../../mobx__entry/WinPageMobxEntry";
import { If } from "../if-operator/If";


interface IWinDropdownMenuFilterDropdownProps {

}


export const FilterFormWinFilterDropdownMenu: FC<any> = observer(( {} ) => {
  let versionFilter = useVersionFilter();

  const allVersionRadio_checkedHandler = ( { checked }: CheckedEvent ) =>
    checked && versionFilter.checkedAllVersion();
  const lastVersionRadio_checkedHandler = ( { checked }: CheckedEvent ) =>
    checked && versionFilter.checkedLastVersion();


  return (
    <form className="win-filter-dropdown-menu__control-bar">
      <fieldset className="fieldset_md">
        <legend className="legend_md">Отобразить:</legend>
        <RadioGroup name="filter-version">
          <Radio value="last"
                 className="win-filter-version__radio"
                 classNameChecked="win-filter-version__radio_checked"
                 classNameNotChecked="win-filter-version__radio_not-checked"
                 onChecked={ lastVersionRadio_checkedHandler }
                 checked={ versionFilter.isLastVersionChecked }>
            <Label>Последнее</Label>
          </Radio>
          <Radio value="all"
                 className="win-filter-version__radio"
                 classNameChecked="win-filter-version__radio_checked"
                 classNameNotChecked="win-filter-version__radio_not-checked"
                 onChecked={ allVersionRadio_checkedHandler }
                 checked={ versionFilter.isAllVersionChecked }>
            <Label>Все</Label>
          </Radio>
        </RadioGroup>
      </fieldset>
    </form>
  );
});


interface IVersionFilterWinFilterContentFormProps {
}


export const VersionFilterWinFilterContentForm: FC<IVersionFilterWinFilterContentFormProps> = observer( ( {} ) => {
  let versionFilter = useVersionFilter();



  let listItemAll = versionFilter.versionInfoAll.map( ( inputModel:Required<InputModel<VersionInfoMeta>>, index:number ) => (
    <li key={ index } className="win-filter-content-form__list-item">
      <Checkbox id={ inputModel.data.version }
                className="win-filter-content-form__checkbox"
                value={ inputModel.data.version }
                onChecked={ () => versionFilter.changeByVersion(inputModel.data.version) }
                checked={ inputModel.checked }>
        <Label className="win-filter-content-form__label">
          <CheckboxIconGroup/>
          <span className="win-filter-content-form__label_stage">{ inputModel.data.stage }</span>
          <If condition={inputModel.data.updateVersion !== ''}>
            <span className="win-filter-content-form__label_update-version">upd{ inputModel.data.updateVersion }</span>
          </If>
          <span className="win-filter-content-form__label_date">({ inputModel.data.dateRelease })</span>
          <span className="win-filter-content-form__label_count">{ inputModel.data.count }</span>
        </Label>
      </Checkbox>
    </li>
  ) );


  return (
    <form className="win-filter-content-form">
      <fieldset className="fieldset_md">
        <legend className="legend_md legend-with-meta">
          <span className="legend_md_base-info">История версий</span>
          <span className="legend_md_meta-info">Всего: {versionFilter.innovationCount}</span>
        </legend>
        <ul>
          { listItemAll }
        </ul>
      </fieldset>
    </form>
  );
} );

export const WinDropdownMenuFilterDropdown: FC<IWinDropdownMenuFilterDropdownProps> = observer(( {} ) => {
  return (
    <div className="win-version-filter">
      <header className="win-version-filter__header">
        <span>Версионный фильтр</span>
      </header>
      <div className="scroll-wrapper">
        <FilterFormWinFilterDropdownMenu/>
        <VersionFilterWinFilterContentForm/>
      </div>
    </div>
  );
});
