export class InnovationFilterSearchParamsParser {
  static readonly parse = (urlSearchParams: URLSearchParams): string[] => {
    let filters = urlSearchParams.get(`vf`) ?? ``;

    return filters.split(`,`).filter(Boolean);

  }
}
