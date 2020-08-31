import { createInformerRotator } from "../react__hooks/collapse-informer-hook";


interface ICreateBaseLayoutStoresParams {
}

export const createBaseLayoutStores = () => ( {
  informerRotator:createInformerRotator(),
} );

export type UseBaseLayoutStores=ReturnType<typeof createBaseLayoutStores>;