
interface INav {
  name:string;
  path:string;
}
interface ISectionNav extends INav{
  hasPrevAnchor:boolean;
  hasNextAnchor:boolean;
}
export interface IPageNavData extends INav{
  sections: INav[];
}
export interface IPageNavItem extends INav{
  sections:ISectionNav[];

  hasPrevPage:boolean;
  hasNextPage:boolean;

  prevPage:INav;
  nextPage:INav;
}
