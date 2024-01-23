import { action, makeAutoObservable, observable } from 'mobx';
import { RootStore } from '../../store';
import { USER_ROLE_TYPE, UserIE } from '../../_common/types/userTypes';
import { getUserStructure, setUser } from './UserStoreActions';

class UserStore {
  rootStore: RootStore;
  userData: UserIE = {
    id: '',
    role: USER_ROLE_TYPE.VIEWER
  };
  isPending: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {
      rootStore: false,
      userData: observable,
      isPending: observable,
      setUser: action,
      setUserDataPending: action,
      getUserStructure: action
    });

    this.rootStore = rootStore;
  }

  // actions
  setUser = (user: UserIE) => {
    setUser(user);
  };
  setUserDataPending = (isPending: boolean) => (this.isPending = isPending);

  // !!! SELECTION BYY RIGHTS NEEDS TO BE DONE IN BACK
  // user must NOT receive unauthorized data
  getUserStructure = () => {
    getUserStructure(this.rootStore.folderStructureStore.rootFolder[0], this.userData.role, null);
  };
}

export default UserStore;
