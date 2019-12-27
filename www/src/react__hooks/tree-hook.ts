import { useReducer } from "react";

export interface TreeNode<T> {
  isToggle:boolean;
  index:number;
  data:T
}

export enum TreeActions{
  Toggle='toggle',
  ToggleAll='toggleAll',
}


type ActionType<T=string>={
  type:T;
}
type Action<T extends ActionType>={
  [K in keyof T]:T[K];
}
type Reducer<S,A>=(state:S,action:A)=>S;

interface IToggleAction {
  type:TreeActions.Toggle;
  id:string;
}
interface IToggleAllAction {
  type:TreeActions.ToggleAll;
}


const initialState = {
  isEnter:false,
  isLeave:false,
  isClick:false
};

type State=typeof initialState
type ActionGroup=IToggleAction|IToggleAllAction;

const reducer: Reducer<State, ActionGroup> = ( state, {type} ) => {
  switch (type ) {
    case TreeActions.Toggle:
      return {...state}
    case TreeActions.ToggleAll:
      return {...state}
    default:
      return state;
  }
};

export const useTree=()=>{
}