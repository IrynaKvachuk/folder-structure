import { makeAutoObservable, observable, action, runInAction } from 'mobx';
import { FileItemIF, FolderItemIF } from '../_common/types/folderStructureTypes';
import { RootStore } from '../store';
import { getFolderStructure } from '../../api/folderStructureAPI';
import { addIsOpenProperty } from './utils';
import { deleteItem } from './actions';

class FolderStrucutreStore {
  rootStore: RootStore;
  rootFolder: Array<FolderItemIF | FileItemIF> = [];
  fetchingData = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      rootFolder: observable,
      fetchingData: observable,
      loadStructure: action,
      toggleFolder: action,
      deleteItem: action
    });

    this.rootStore = rootStore;
    this.loadStructure();
  }

  loadStructure = async () => {
    getFolderStructure().then((data) => {
      // prepare data, add additional params for items
      const structure = addIsOpenProperty(data);

      runInAction(() => {
        this.rootFolder.push(structure);
      });
    });
  };

  toggleFolder = (folder: FolderItemIF) => {
    folder.isOpen = !folder.isOpen;
  };

  deleteItem = deleteItem;
}

export default FolderStrucutreStore;
