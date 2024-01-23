import { makeAutoObservable, observable, action } from 'mobx';
import { StructureItemType, FolderItemIF } from '../../_common/types/folderStructureTypes';
import { RootStore } from '../../store';
import { deleteItem, findStructure, loadStructure } from './FolderStoreActions';

class FolderStructureStore {
  rootStore: RootStore;
  rootFolder: Array<StructureItemType> = [];
  isPending: boolean = false;
  searchQuery: string = '';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      rootFolder: observable,
      isPending: observable,
      searchQuery: observable,
      loadStructure: action,
      toggleFolder: action,
      deleteItem: action,
      filteredFolderStructure: action
    });

    this.rootStore = rootStore;
  }

  // actions
  loadStructure = loadStructure;
  deleteItem = deleteItem;
  toggleFolder = (folder: FolderItemIF) => (folder.isOpen = !folder.isOpen);
  setFolderStructurePending = (isPending: boolean) => (this.isPending = isPending);
  setSearchQuery = (query: string) => {
    this.searchQuery = query;
    this.filteredFolderStructure();
  };
  filteredFolderStructure = () => {
    if (this.rootFolder.length > 0)
      findStructure(this.rootFolder[0], this.searchQuery.toLowerCase(), null);
  };
}

export default FolderStructureStore;
