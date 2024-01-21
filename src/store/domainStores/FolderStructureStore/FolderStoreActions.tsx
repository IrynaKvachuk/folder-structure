import { runInAction } from 'mobx';
import { getFolderStructure } from '../../../api/folderStructureAPI';
import {
  StructureItemType,
  STRUCTURE_ITEM_TYPE,
  FolderItemIF
} from '../../_common/types/folderStructureTypes';
import { store } from '../../store';
import { prepareData } from './FolderStoreUtils';

export const loadStructure = () => {
  getFolderStructure().then((data) => {
    // prepare data, add additional params for items
    const structure = prepareData(data);

    runInAction(() => {
      store.folderStructureStore.rootFolder.push(structure);
    });
  });

  return;
};

export const deleteItem = (id: string): void => {
  const removeItem = (items: Array<StructureItemType>) => {
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

  removeItem(store.folderStructureStore.rootFolder);

  return;
};

// search by text: open parent folders
const open = (node: StructureItemType) => {
  node.visible = true;

  if (node.parent && node.parent.visible === false) {
    open(node.parent);
  }
};

// serch by text: processed children
const goDown = (node: StructureItemType, close: boolean) => {
  const isFolder = node.type === STRUCTURE_ITEM_TYPE.FOLDER;

  node.visible = true;
  if (isFolder) {
    node.isOpen = true;
    const children = (node as FolderItemIF).children || [];
    children.forEach((element) => {
      goDown(element, true);
    });
  }
};

// search folder structure by text
export const findStructure = (
  node: StructureItemType,
  str: string,
  parent: FolderItemIF | null
): StructureItemType => {
  if (str === '') {
    goDown(node, true);
    return node;
  }
  const isFolder = node.type === STRUCTURE_ITEM_TYPE.FOLDER;
  const match = node.name.toLowerCase().includes(str);

  node.parent = parent;
  if (match) {
    open(node);
  } else {
    node.visible = false;
  }
  if (isFolder) {
    const children = (node as FolderItemIF).children || [];
    children.forEach((element) => {
      findStructure(element, str, node);
    });
  }
  return node;
};
