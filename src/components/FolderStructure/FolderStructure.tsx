import React from 'react';
import { observer } from 'mobx-react';
import FolderStructureContent from './FolderStructureContent/FolderStructureContent';
import FolderStructureToolbar from './FolderStructureToolbar/FolderStructureToolbar';
import { useEffectOnce, useStore } from '../../hooks';

const FolderStructure: React.FC = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  useEffectOnce(() => {
    folderStructureStore.loadStructure();
  });

  return (
    <section className="folder-structure">
      <FolderStructureToolbar />
      <FolderStructureContent />
    </section>
  );
};

export default observer(FolderStructure);
