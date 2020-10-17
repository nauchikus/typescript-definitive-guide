import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { isServer } from "../utils/app-utils";

export interface IMobxCreator<Result=unknown> {
  create<InitialParams>(initialParams?: InitialParams): Result;
  create<InitialParams>(initialParams: InitialParams): Result;
  getInstance<R, InitialParams=unknown>(initialState?: InitialParams): Result;
  getInstance<R, InitialParams=unknown>(initialState: InitialParams): Result;
  destroy(): void;
}

export function useMobxInitializer<InitialParams, Result, Depths>(MobxCreator: IMobxCreator<Result>, initialParams?: InitialParams): typeof MobxCreator extends IMobxCreator<infer R> ? R : null {
  let renderStatusRef = useRef({ isFirstRender: true });

  useEffect(() => {

    return () => {
      // MobxCreator.destroy()
    };
  }, []);


  if (renderStatusRef.current.isFirstRender) {
    MobxCreator.destroy();
    renderStatusRef.current.isFirstRender = false;
  }


  let instance = MobxCreator.getInstance(initialParams);


  return instance;
}

