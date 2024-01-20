import {
  FileItemIF,
  FolderItemIF,
  STRUCTURE_ITEM_TYPE
} from '../_common/types/folderStructureTypes';
import { store } from '../store';

export const deleteItem = (id: string): void => {
  const removeItem = (items: Array<FolderItemIF | FileItemIF>) => {
    for (let i = 0; i < items.length; i++) {
      const curr = items[i];
      const { type } = curr;

      if (curr.id === id) {
        items.splice(i, 1);
        return true;
      }
      // check children
      if (type === STRUCTURE_ITEM_TYPE.FOLDER && curr.children && removeItem(curr.children)) {
        return true;
      }
    }
    // Item not found
    return false;
  };

  removeItem(store.folderStructureStore.rootFolder || []);
};
