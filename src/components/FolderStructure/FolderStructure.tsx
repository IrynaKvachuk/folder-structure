import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import FolderStructureContent from './FolderStructureContent/FolderStructureContent';
import FolderStructureToolbar from './FolderStructureToolbar/FolderStructureToolbar';
import { useLocalStorage, useStore } from '../../hooks';
import { LocalStorageType } from '../../store/_common/types/baseTypes';
import { STORAGE_VARIABLE } from '../../store/_common/variables';

const FolderStructure: React.FC = () => {
  const store = useStore();
  const [storageData, setStorageData] = useLocalStorage<LocalStorageType>(STORAGE_VARIABLE);
  const { userData: storageUserData } = storageData;

  const { folderStructureStore, userStore } = store;
  const { rootFolder } = folderStructureStore;
  const { userData } = userStore;

  useEffect(() => {
    if (!storageUserData.role) return;
    folderStructureStore.loadStructure();
  }, [storageUserData]);

  useEffect(() => {
    if (!rootFolder.length) return;
    userStore.getUserStructure();
  }, [userData, rootFolder]);

  return (
    <section className="folder-structure">
      <FolderStructureToolbar />
      <FolderStructureContent />
    </section>
  );
};

export default observer(FolderStructure);
