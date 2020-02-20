import { IWhatIsNewData } from "../types/IWhatIsNewToc";
import { RouterStore } from "../stores/RouterStore";
import { VersionFilterStore } from "../stores/VersionFilterStore";
import { VisibleSectionValidator } from "./VisibleSectionValidator";
import { createContext, useContext } from "react";

export const WhatIsNewValidatorsContext = createContext<UseWhatIsNewValidators | null>( null );
export const useWinValidators = () => useContext( WhatIsNewValidatorsContext ) as UseWhatIsNewValidators;

interface ICreateWhatIsNewValidatorsParams {
}

export const createWhatIsNewValidators = ( params: ICreateWhatIsNewValidatorsParams ) => {

  return {
  };
};

export type UseWhatIsNewValidators = ReturnType<typeof createWhatIsNewValidators>;