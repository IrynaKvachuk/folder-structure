import { useStore } from '../../../hooks';
import SearchBar from '../../SearchBar/SearchBar';
import ReloadFolderStructureBtn from './ReloadFolderStructureBtn/ReloadFolderStructureBtn';

const FolderStructureToolbar = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  return (
    <div className="folder-structure_toolbar">
      <ReloadFolderStructureBtn />
      <SearchBar
        className="folder-structure_toolbar__search-bar"
        callback={(query: string) => folderStructureStore.filteredFolderStructure(query)}
      />
    </div>
  );
};

export default FolderStructureToolbar;
