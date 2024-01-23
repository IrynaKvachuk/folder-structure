import { FormEvent } from 'react';
import { LoginDataIE, USER_ROLE_TYPE, UserIE } from '../../../store/_common/types/userTypes';
import UserStore from '../../../store/domainStores/UserStore/UserStore';
import { getUserData } from '../../../api/userAPI';
import { DispatchT, SetStateActionT } from '../../../store/_common/types/baseTypes';

export type LoginFormData = {
  role: USER_ROLE_TYPE;
};

type HandleLoginSubmit = {
  event: FormEvent<HTMLFormElement>;
  formData: LoginFormData;
  userStore: UserStore;
  callback: () => void;
};

export const handleLoginSubmit = (props: HandleLoginSubmit) => {
  const { event, formData, userStore, callback } = props;

  event.preventDefault();
  const data: LoginDataIE = { login: formData.role };

  userStore.setUserDataPending(true);
  getUserData(data).then((user: UserIE) => {
    userStore.setUser(user);
    userStore.setUserDataPending(false);
    callback();
  });

  return;
};

type SetRole = {
  role: string;
  setFormData: DispatchT<SetStateActionT<LoginFormData>>;
};

export const setRole = (props: SetRole) => {
  const { role, setFormData } = props;

  setFormData((prevState) => ({ ...prevState, role: role as USER_ROLE_TYPE }));

  return;
};
