import {useContext} from  'react'
import {createContext}from 'react';

import {AppLocalization, DefaultLocalization}from '../localization';

export const Localization=createContext<AppLocalization>(DefaultLocalization);

const map=new Map<string,unknown>();


interface StringDictionary<T> {[key:string]:T;};
type D = StringDictionary<unknown>;


export const useTranslator = <T extends Array<any>> ( ...translationIdAll: string[] ): [T] => {
  let localization: any = useContext<AppLocalization>( Localization )

  if ( translationIdAll.length === 0 ) {
    return localization
  }


  const navigator = <R, T extends D = D, U extends keyof T = string> ( object: T, ...paths: U[] ): R =>
      ( paths.length ? navigator( object[ paths.shift()! ] as any, ...paths ) : object ) as R

  let translates = translationIdAll.reduce<Set<T>>( ( acc, id ) => {
    if ( !map.has( id ) ) {
      let translationPathAll = id.split( "." )
      let translation: T = navigator( localization, ...translationPathAll )

      map.set( id, translation )
    }

    return acc.add( map.get( id ) as T )
  }, new Set() )


  return [[...translates] as T]
};
