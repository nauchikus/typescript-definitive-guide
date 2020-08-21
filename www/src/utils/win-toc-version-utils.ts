import { Version } from "./Version";
import { IWhatIsNewToc } from "../types/IWhatIsNewToc";
import { TreeNode } from "../stores/CollapseTreeMobxStore";

export const getInnovationAllByVersionMMP = (versionMMP: string, tree: TreeNode<IWhatIsNewToc>[]) =>
  tree
    .find(item => new Version(item.data.releaseHistory[0].version).mmp === versionMMP)
    ?.data.innovations;
