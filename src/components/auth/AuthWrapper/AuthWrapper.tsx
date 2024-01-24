import { ReactNode, useEffect } from 'react';
import { useEffectOnce, useLocalStorage, useStore } from '../../../hooks';
import { LocalStorageType } from '../../../store/_common/types/baseTypes';
import { STORAGE_VARIABLE } from '../../../store/_common/variables';
import LoaderIcon from '../../_icons/LoaderIcon';
import { observer } from 'mobx-react';

interface Props {
  children: ReactNode;
}

const AuthWrapper: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const store = useStore();
  const [storageData, setStorageData] = useLocalStorage<LocalStorageType>(STORAGE_VARIABLE);
  const { userData: storageUserData } = storageData;

  const { userStore } = store;
  const { userData, isPending } = userStore;

  useEffectOnce(() => {
    if (storageUserData) userStore.setUser(storageUserData);
  });

  useEffect(() => {
    setStorageData({ userData });
  }, [userData]);

  return (
    <div
      className={`auth-wrapper ${isPending ? 'auth-wrapper--disabled' : 'auth-wrapper--enabled'}`}
    >
      {isPending && <LoaderIcon className="auth-wrapper_loader" />}
      {children}
    </div>
  );
};

export default observer(AuthWrapper);
