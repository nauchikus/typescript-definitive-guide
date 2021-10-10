import { createContext, useContext, useReducer, useState } from "react";



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