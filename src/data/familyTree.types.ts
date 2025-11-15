export interface FamilyTreeNode {
  id: string;
  name: string;
  gender?: string;
  birthYear?: number | null;
  deathYear?: number | null;
  birthPlace?: string | null;
  deathPlace?: string | null;
  children?: FamilyTreeNode[];
}
