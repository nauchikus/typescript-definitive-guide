import { action, computed, decorate, IObservableArray, observable } from "mobx";
import { CheckboxStore, InputData, InputState } from "./CheckboxStore";
import { VersionInfoMeta } from "../transformers/innovationDataToVersionInfoTransformer";


type InputModelWithRequiredData<T> = Required<InputData<T>> & InputState;

interface IVersionFilterStoreParams<TData> {
  checkboxStore?:CheckboxStore<TData>;
  }

export class VersionFilterStore {
  private checkboxStore:CheckboxStore<VersionInfoMeta>;

  get versionInfoAll():IObservableArray<InputModelWithRequiredData<VersionInfoMeta>>{
    return this.checkboxStore.inputModelAll as IObservableArray<InputModelWithRequiredData<VersionInfoMeta>>;
  }
  get length(){
    return this.versionInfoAll.length

  }
  get checkedLength(){
    return this.checkboxStore.inputModelAll
      .reduce( ( count, current ) => current.checked ? ++count : count, 0 );
  }
  get innovationCount(){
    return this.checkboxStore.inputModelAll
      .reduce( ( count, current ) =>
        count + (current as InputModelWithRequiredData<VersionInfoMeta>).data.count, 0 );
  }
  get checkedInnovationCount(){
    return this.checkboxStore.inputModelAll
      .reduce( ( count, current ) => {
        return current.checked ? count + (current.data?.count ?? 0) : count;
      }, 0 );
  }
  get isAllVersionChecked(){
    return this.checkboxStore.inputModelAll.length !== 0 && this.checkboxStore.inputModelAll
      .every( inputModel => inputModel.checked );
  }
  get isAllVersionUnchecked(){
    return this.checkboxStore.inputModelAll.length !== 0 && this.checkboxStore.inputModelAll
      .every( inputModel => !inputModel.checked );
  }
  get isLastVersionChecked(){
    if ( this.checkboxStore.inputModelAll.length === 0 ) {
      return false;
    }

    let inputModelAll = this.checkboxStore.inputModelAll as InputModelWithRequiredData<VersionInfoMeta>[];

    if ( !inputModelAll[ 0 ].checked ) {
      return false;
    }


    let [, ...otherInputModelAll] = inputModelAll;

    return otherInputModelAll.every( inputModel => !inputModel.checked );
  }

  constructor (params:IVersionFilterStoreParams<VersionInfoMeta>) {
    this.checkboxStore = params.checkboxStore ?? new CheckboxStore<VersionInfoMeta>();
  }

  addVersionInfo ( versionInfoAll: VersionInfoMeta[] ) {
    versionInfoAll.forEach( versionInfo => this.checkboxStore.addInputModel( {
      id: versionInfo.version,
      data: versionInfo
    } ) );
  }
  clean(){
    this.checkboxStore.clean();
  }
  changeByVersion(...versionAll:string[]){
    this.checkboxStore.changeById( ...versionAll );
  }
  checkedByVersion(...versionAll:string[]){
    this.checkboxStore.checkedById( ...versionAll );
  }
  checkedOnlyByVersion(...versionAll:string[]){
    this.checkboxStore.checkedOnlyById( ...versionAll );
  }
  checkedAllVersion(){
    this.checkboxStore.checkedAll();
  }
  checkedLastVersion(){
    ( this.checkboxStore.inputModelAll as InputModelWithRequiredData<VersionInfoMeta>[] )
      .forEach( ( inputModel, index ) => inputModel.checked = index === 0 );
  }
  isCheckedByVersion ( version: string ) {
    return this.checkboxStore.isCheckedById( version );
  }
  canDisplayedByVersion(version:string){
    return this.isCheckedByVersion( version );
  }

}

decorate( VersionFilterStore, {
  versionInfoAll: computed,
  length: computed,
  checkedLength: computed,
  isAllVersionChecked: computed,
  isAllVersionUnchecked: computed,
  isLastVersionChecked: computed,

  addVersionInfo: action,
  checkedByVersion: action,
  checkedAllVersion: action,
  checkedLastVersion: action,
  isCheckedByVersion: action,

} );
