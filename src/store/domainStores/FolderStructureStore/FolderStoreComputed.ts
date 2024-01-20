import { STRUCTURE_ITEM_TYPE, StructureItemType } from '../../_common/types/folderStructureTypes';
import FolderStructureStore from './FolderStructureStore';

export const filteredBySearch = (store: FolderStructureStore) => {
  const filterItems = (items: Array<StructureItemType>): Array<StructureItemType> => {
    return items.reduce((acc, item) => {
      const isFolder = item.type === STRUCTURE_ITEM_TYPE.FOLDER;
      const filteredChildren = isFolder && item.children ? filterItems(item.children) : [];
      const isMatching = item.name.toLowerCase().includes(store.searchQuery.toLowerCase());

      if (isMatching || filteredChildren.length > 0) {
        const filteredItem = { ...item };

        // add children only for folders
        if (filteredItem.type === STRUCTURE_ITEM_TYPE.FOLDER)
          filteredItem.children = filteredChildren;

        acc.push(filteredItem);
      }

      return acc;
    }, [] as StructureItemType[]);
  };

  return filterItems(store.rootFolder);
};
