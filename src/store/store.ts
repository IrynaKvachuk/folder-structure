import FolderStructureStore from './domainStores/FolderStructureStore/FolderStructureStore';

export class RootStore {
  // userStore: UserStore;
  folderStructureStore: FolderStructureStore;

  constructor() {
    // this.userStore = new UserStore(this);
    this.folderStructureStore = new FolderStructureStore(this);
  }
}
export const store = new RootStore();
