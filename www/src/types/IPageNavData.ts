
export interface IData<T=null> {
  data?:T;
}
export interface ISection<T> {
  sections:Array<T>;
}
export interface IPageNavLeaf<TLeafData=null> extends IData<TLeafData>{
  name:string;
  path:string;
}
export interface IPageNavNode<TSection,TNodeData=null> extends IPageNavLeaf<TNodeData>,ISection<TSection>{

}
export interface IPageNavSection<TLeafData=null> extends IPageNavLeaf<TLeafData>{
  prevAnchor: IPageNavLeaf<TLeafData> | null;
  nextAnchor: IPageNavLeaf<TLeafData> | null;

}
export interface IPageNavPage<TNodeData=null,TLeafData=null> extends IPageNavNode<IPageNavSection<TLeafData>,TNodeData>{
  hasPrevPage:boolean;
  hasNextPage:boolean;

  prevPage: IPageNavLeaf<TNodeData> | null;
  nextPage: IPageNavLeaf<TNodeData> | null;

}
