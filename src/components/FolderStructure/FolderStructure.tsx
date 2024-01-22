import React from 'react';
import { observer } from 'mobx-react';
import FolderItem from '../StructureItem/FolderItem/FolderItem';
import { useStore } from '../../hooks/useStore';
import {
  STRUCTURE_ITEM_TYPE,
  StructureItemType
} from '../../store/_common/types/folderStructureTypes';
import FileItem from '../StructureItem/FileItem/FileItem';
import SearchBarWrapper from '../SearchBar/SearchBar';

const FolderStructure: React.FC = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  return (
    <section className="folder-structure">
      <SearchBarWrapper
        className="folder-structure_search-bar"
        callback={(query: string) => folderStructureStore.filteredFolderStructure(query)}
      >
        <div className="folder-structure_content">
          {folderStructureStore.rootFolder.length
            ? folderStructureStore.rootFolder.map((item: StructureItemType) => {
                const { id, type } = item;

                if (type === STRUCTURE_ITEM_TYPE.FILE) return <FileItem key={id} data={item} />;
                return <FolderItem key={id} data={item} />;
              })
            : 'No structure data'}
        </div>
      </SearchBarWrapper>
    </section>
  );
};

export default observer(FolderStructure);
