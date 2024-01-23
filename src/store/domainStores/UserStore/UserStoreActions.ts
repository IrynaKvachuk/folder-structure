import { runInAction } from 'mobx';
import { UserIE } from '../../_common/types/userTypes';
import { store } from '../../store';
import {
  FolderItemIF,
  STRUCTURE_ITEM_TYPE,
  StructureItemType
} from '../../_common/types/folderStructureTypes';

const checkForUser = (user: string, rights: string) => {
  let allowed = false;
  if (user === 'admin') allowed = true;
  if (user === 'viewer' && rights === 'viewer') allowed = true;
  if (user === 'user' && rights !== 'admin') allowed = true;

  return allowed;
};

export const setUser = (user: UserIE) => {
  runInAction(() => {
    store.userStore.userData = user;
  });

  return;
};

const open = (node: StructureItemType) => {
  node.visible = true;

  if (node.parent && node.parent.visible === false) {
    open(node.parent);
  }
};

// !!! SELECTION BYY RIGHTS NEEDS TO BE DONE IN BACK
// user must NOT receive unauthorized data
export const getUserStructure = (
  node: StructureItemType,
  user: string,
  parent: FolderItemIF | null
) => {
  if (!node) return [];
  const isFolder = node.type === STRUCTURE_ITEM_TYPE.FOLDER;
  const isAllowed = checkForUser(user, node.rights);

  node.parent = parent;

  if (isAllowed) {
    open(node);
  } else {
    node.visible = false;
  }
  if (isFolder) {
    const children = (node as FolderItemIF).children || [];
    children.forEach((element) => {
      getUserStructure(element, user, node);
    });
  }
  return node;
};
