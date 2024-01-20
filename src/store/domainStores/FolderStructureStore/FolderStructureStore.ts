import { makeAutoObservable, observable, action, computed } from 'mobx';
import { StructureItemType, FolderItemIF } from '../../_common/types/folderStructureTypes';
import { RootStore } from '../../store';
import { deleteItem, loadStructure } from './FolderStoreActions';
import { filteredBySearch } from './FolderStoreComputed';

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
      filteredFolderStructure: computed
    });

    this.rootStore = rootStore;
    this.loadStructure();
  }

  // actions
  loadStructure = loadStructure;
  deleteItem = deleteItem;
  toggleFolder = (folder: FolderItemIF) => (folder.isOpen = !folder.isOpen);
  setSearchQuery = (term: string) => (this.searchQuery = term);

  //computed
  get filteredFolderStructure() {
    return filteredBySearch(this);
  }
}

export default FolderStructureStore;
