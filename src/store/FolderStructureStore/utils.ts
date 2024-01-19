import {
  FileItemIF,
  FolderItemIF,
  STRUCTURE_ITEM_TYPE
} from '../_common/types/folderStructureTypes';

export const addIsOpenProperty = (obj: FolderItemIF): FolderItemIF | FileItemIF => {
  if (typeof obj.isOpen !== 'boolean') {
    obj['isOpen'] = true;
  }

  if (obj.children && obj.children.length > 0) {
    for (const child of obj.children) {
      if (child.type === STRUCTURE_ITEM_TYPE.FOLDER) addIsOpenProperty(child);
    }
  }
  return obj;
};
