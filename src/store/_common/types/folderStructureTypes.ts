import { USER_ROLE_TYPE } from './userTypes';

export enum STRUCTURE_ITEM_TYPE {
  FOLDER = 'folder',
  FILE = 'file'
}

export interface FileItemIF {
  id: string;
  parentId: string;
  type: STRUCTURE_ITEM_TYPE.FILE;
  name: string;
  visible: boolean; // used with search text
  parent: FolderItemIF | null;
  rights: USER_ROLE_TYPE;
}

export interface FolderItemIF {
  id: string;
  parentId: string;
  type: STRUCTURE_ITEM_TYPE.FOLDER;
  name: string;
  children: Array<StructureItemType>;
  isOpen: boolean;
  visible: boolean; // used with search text
  parent: FolderItemIF | null;
  rights: USER_ROLE_TYPE;
}

export type StructureItemType = FileItemIF | FolderItemIF;
