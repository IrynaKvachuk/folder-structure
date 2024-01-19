export enum STRUCTURE_ITEM_TYPE {
  FOLDER = 'folder',
  FILE = 'file'
}

export interface StructureItemIF {}

export interface FileItemIF {
  id: string;
  parentId: string;
  type: STRUCTURE_ITEM_TYPE.FILE;
  name: string;
}

export interface FolderItemIF {
  id: string;
  parentId: string;
  type: STRUCTURE_ITEM_TYPE.FOLDER;
  name: string;
  children?: Array<FolderItemIF | FileItemIF>;
  isOpen: boolean;
}
