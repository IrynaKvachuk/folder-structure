import { action, makeAutoObservable, observable } from 'mobx';
import { RootStore } from '../../store';
import { MODAL_TYPE } from '../../_common/types/modalTypes';

class ModalStore {
  rootStore: RootStore;
  isOpen: boolean = false;
  type: MODAL_TYPE = MODAL_TYPE.NONE;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      isOpen: observable,
      type: observable,
      toggleModal: action
    });

    this.rootStore = rootStore;
  }

  // actions
  toggleModal(modalType: MODAL_TYPE, isOpen: boolean) {
    this.isOpen = isOpen;
    this.type = modalType;
  }
}

export default ModalStore;
