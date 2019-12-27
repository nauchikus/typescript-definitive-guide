import { createContext, useContext, useReducer, useState } from "react";

// export enum DropdownControlType {
//   Click,
//   Hover,
//   Empty,
// }
//
// export enum DropdownAction{
//   Enter,
//   Leave,
//   Click,
// }
//
//
// type ActionType<T=string>={
//   type:T;
// }
// type Action<T extends ActionType>={
//   [K in keyof T]:T[K];
// }
// type Reducer<S,A>=(state:S,action:A)=>S;
//
//
// const initialState = {
//   isEnter:false,
//   isLeave:false,
//   isClick:false
// };
//
// type State=typeof initialState
// type ActionGroup=ActionType<DropdownAction>
// const reducer: Reducer<State, ActionGroup> = ( state, {type} ) => {
//   switch (type ) {
//     case DropdownAction.Enter:
//       return {...state}
//     case DropdownAction.Leave:
//       return {...state}
//     case DropdownAction.Click:
//       return {...state}
//     default:
//       return state;
//   }
// };

const getInitialSTate = () => ( {
  isOpen:false,
  isClose:true,
  isToggle: false,
} );

export const createDropdownContext = () => {
  let [state, setState] = useState( getInitialSTate() );
  const click = () => {
    if ( state.isToggle ) {
      setState( { isToggle: false, isOpen: false, isClose: true } );
    } else {
      setState( { isToggle: true, isOpen: true, isClose: false } );
    }
  };


  let context = {
    ...state,
    click,
  };


  return context;
};
export const DropdownContext = createContext( {
  ...getInitialSTate(),
  click:()=>{},
} );

export const useDropdown = () => useContext( DropdownContext );