import { makeAutoObservable, observable, action } from 'mobx';
import { StructureItemType, FolderItemIF } from '../../_common/types/folderStructureTypes';
import { RootStore } from '../../store';
import { deleteItem, findStructure, loadStructure } from './FolderStoreActions';

class FolderStructureStore {
  rootStore: RootStore;
  rootFolder: Array<StructureItemType> = [];
  fetchingData: boolean = false;
  searchQuery: string = '';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      rootFolder: observable,
      fetchingData: observable,
      searchQuery: observable,
      loadStructure: action,
      toggleFolder: action,
      deleteItem: action,
      filteredFolderStructure: action
    });

    this.rootStore = rootStore;
    this.loadStructure();
  }

  // actions
  loadStructure = loadStructure;
  deleteItem = deleteItem;
  toggleFolder = (folder: FolderItemIF) => (folder.isOpen = !folder.isOpen);
  setSearchQuery = (query: string) => (this.searchQuery = query);
  filteredFolderStructure = (query: string) => {
    if (this.rootFolder.length > 0) findStructure(this.rootFolder[0], query.toLowerCase(), null);
  };
}

export default FolderStructureStore;