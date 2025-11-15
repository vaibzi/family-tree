import familyTreeJson from "@/data/familyTree.json";

import type { FamilyTreeNode } from "@/data/familyTree.types.ts";

export const familyTree: FamilyTreeNode = familyTreeJson as FamilyTreeNode;

export default familyTree;
