import React from 'react';
import { observer } from 'mobx-react';
import FolderItem from '../StructureItem/FolderItem/FolderItem';
import { useStore } from '../../hooks/useStore';
import { STRUCTURE_ITEM_TYPE } from '../../store/_common/types/folderStructureTypes';
import FileItem from '../StructureItem/FileItem/FileItem';

const FolderStructure: React.FC = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  return (
    <section className="folder-structure">
      {folderStructureStore.rootFolder.length
        ? folderStructureStore.rootFolder.map((item) => {
            const { id, type } = item;

            if (type === STRUCTURE_ITEM_TYPE.FILE) return <FileItem key={id} data={item} />;
            return <FolderItem key={id} data={item} />;
          })
        : 'No structure data'}
    </section>
  );
};

export default observer(FolderStructure);
