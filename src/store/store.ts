import FolderStrucutreStore from './FolderStructureStore/FolderStructureStore';

export class RootStore {
  // userStore: UserStore;
  folderStructureStore: FolderStrucutreStore;

  constructor() {
    // this.userStore = new UserStore(this);
    this.folderStructureStore = new FolderStrucutreStore(this);
  }
}
export const store = new RootStore();
