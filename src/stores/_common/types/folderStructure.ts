export enum STRUCTURE_ITEM_TYPE {
  FOLDER = 'folder',
  FILE = 'file'
}

export type FileItemIF = {
  type: STRUCTURE_ITEM_TYPE.FILE;
  name: string;
};

export interface FolderItemIF {
  type: STRUCTURE_ITEM_TYPE.FOLDER;
  name: string;
  children?: Array<FolderItemIF | FileItemIF>;
}
