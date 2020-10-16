import { action, decorate, observable } from "mobx";

export interface CollapseTreeNode<T> {
  id:string;
  isCollapse:boolean;
  index:number;
  data: T;
}

export class CollapseTreeMobxStore<TData> {
  constructor(public tree:CollapseTreeNode<TData>[], public isCollapseAll=false) {
  }

  getNodeById ( id: string ) {
    return this.tree.find( node => node.id === id );
  }
  toggleById ( id: string ) {
    let node = this.tree.find( node => node.id === id );

    if ( node ) {
      node.isCollapse = !node.isCollapse;
    }
  }
  collapseAll () {
    this.isCollapseAll = !this.isCollapseAll;
    this.tree.forEach( node => node.isCollapse = this.isCollapseAll );
  }
}

decorate(CollapseTreeMobxStore, {
  tree: observable,
  isCollapseAll: observable,
  toggleById: action,
  collapseAll: action
});

