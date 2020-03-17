import { action, computed, decorate, IObservableArray, observable } from "mobx";

export type InputData<TData> = { id:string;data?:TData };
export type InputState = { checked: boolean };
export type InputModel<T> = InputData<T> & InputState;
export type InputModelAddMethodParams<T> = InputData<T> & Partial<InputState>;

enum InputStates {
  Checked,
  NotChecked,
  Change
}



const DEFAULT_INPUT_STATE = { checked: false };



const change = action(<TData>( state: InputStates, inputModelAll: InputModel<TData>[], inputModelIdAll: string[] ) => {
  inputModelIdAll.forEach( id => {
    let currentInputModel = inputModelAll.find( inputModel => inputModel.id === id );


    if ( !currentInputModel ) {
      return;
    }

    if ( state === InputStates.Checked ) {
      currentInputModel.checked = true;
    } else if ( state === InputStates.NotChecked ) {
      currentInputModel.checked = true;
    } else if ( state === InputStates.Change ) {
      currentInputModel.checked = !currentInputModel.checked;
    }


  } );
});



export class CheckboxStore<TData>{
  readonly inputModelAll: InputModel<TData>[] = [];

  addInputModel ( ...inputModelAll: InputModelAddMethodParams<TData>[] ) {
    inputModelAll.forEach( params => this.inputModelAll.push( Object.assign(
      {}, DEFAULT_INPUT_STATE, params
    ) ) );
  }

  removeInputModelById ( ...inputModelIdAll: string[] ) {
    inputModelIdAll.forEach( id => {
      let currentInputModel = this.inputModelAll.find( inputModel => inputModel.id === id );

      if ( !currentInputModel ) {
        return;
      }

      this.inputModelAll
        .splice( this.inputModelAll.indexOf( currentInputModel ), 1 );
    } );
  }

  clean (){
    ( this.inputModelAll as IObservableArray<InputModel<TData>> ).clear();
  }

  checkedAll () {
    this.inputModelAll.forEach( inputModel => inputModel.checked = true );
  }


  uncheckedAll () {
    this.inputModelAll.forEach( inputModel => inputModel.checked = false );
  }

  changeById ( ...inputModelIdAll: string[] ) {
    change( InputStates.Change, this.inputModelAll, inputModelIdAll );
  }

  checkedById ( ...inputModelIdAll: string[] ) {
    change( InputStates.Checked, this.inputModelAll, inputModelIdAll )
  }
  uncheckedById ( ...inputModelIdAll: string[] ) {
    change( InputStates.NotChecked, this.inputModelAll, inputModelIdAll )
  }

  isCheckedById ( id: string ) {
    let currentInputModel = this.inputModelAll.find( inputModel => inputModel.id === id );


    if ( !currentInputModel ) {
      return false;
      // throw new Error( `Input model with id "${ id }" not exists.` );
    }


    return currentInputModel.checked;
  }

}

decorate( CheckboxStore, {
  inputModelAll: observable,
  addInputModel: action,
  removeInputModelById: action,
  clean: action,
  changeById: action,
  checkedAll: action,
  uncheckedAll: action,
  checkedById: action,
  uncheckedById: action
} );


