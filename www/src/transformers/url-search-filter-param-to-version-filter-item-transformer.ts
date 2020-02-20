export const urlSearchFilterParamToVersionFilterItemTransformer = ( filterParam: string | null ) => filterParam
  ?.split( `,` )
  .map( version => version.trim() ) ?? [];