import React, { useId } from 'react';
import { observer } from 'mobx-react';
import folderStructureStore from '../../stores/FolderStructureStore';
import FolderItem from '../StructureItem/FolderItem/FolderItem';

const FolderStructure: React.FC = observer(() => {
  const id = useId();

  return (
    <section className="folder-structure">
      {folderStructureStore.folders
        ? folderStructureStore.folders.map((folder, index) => {
            const { name } = folder;

            return (
              <FolderItem
                key={id + name + index} // better to generate on back
                data={folder}
              />
            );
          })
        : 'No structure data'}
    </section>
  );
});

export default FolderStructure;
