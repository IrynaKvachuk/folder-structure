import { makeAutoObservable } from 'mobx';
import { FolderItemIF } from './_common/types/folderStructure';
import structureData from './mock.json';

class FolderStore {
  folders: Array<FolderItemIF> = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchFolders();
  }

  fetchFolders() {
    // data received from API
    setTimeout(() => {
      const data = structureData as FolderItemIF;
      this.folders = [data];
    }, 1000);
  }
}

const folderStructureStore = new FolderStore();
export default folderStructureStore;
