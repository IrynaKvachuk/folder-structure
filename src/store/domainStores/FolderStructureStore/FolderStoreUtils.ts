import {
  StructureItemType,
  STRUCTURE_ITEM_TYPE,
  FolderItemIF
} from '../../_common/types/folderStructureTypes';

const addIsOpenProperty = (obj: StructureItemType) => {
  if (obj.type !== STRUCTURE_ITEM_TYPE.FOLDER) return obj;
  if (typeof obj.isOpen !== 'boolean') {
    obj['isOpen'] = true;
  }

  return;
};

const addParams = (data: StructureItemType, parent: FolderItemIF | null) => {
  // config for all items
  data.visible = true; // to filter by search
  data.parent = null;
  data.allowed = false; // to check authorization

  if (data.type === STRUCTURE_ITEM_TYPE.FOLDER) {
    // config for folders
    addIsOpenProperty(data);

    if (data.children && data.children.length > 0) {
      // proceed children
      for (const child of data.children) {
        addParams(child, data);
      }
    }
  }

  return;
};

export const prepareData = (data: StructureItemType): StructureItemType => {
  addParams(data, null);

  return data;
};
