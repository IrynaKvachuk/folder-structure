import FolderStructureStore from './domainStores/FolderStructureStore/FolderStructureStore';
import UserStore from './domainStores/UserStore/UserStore';
import ModalStore from './viewStores/ModalStore/ModalStore';

export class RootStore {
  userStore: UserStore;
  folderStructureStore: FolderStructureStore;
  modalStore: ModalStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.folderStructureStore = new FolderStructureStore(this);
    this.modalStore = new ModalStore(this);
  }
}
export const store = new RootStore();
