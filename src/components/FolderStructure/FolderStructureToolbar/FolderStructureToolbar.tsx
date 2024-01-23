import { useStore } from '../../../hooks';
import SearchBar from '../../SearchBar/SearchBar';
import ReloadFolderStructureBtn from './ReloadFolderStructureBtn/ReloadFolderStructureBtn';
import UserSetterBtn from './UserSetter/UserSetter';

const FolderStructureToolbar = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  return (
    <div className="folder-structure_toolbar">
      <ReloadFolderStructureBtn />
      <UserSetterBtn />
      <SearchBar
        className="folder-structure_toolbar__search-bar"
        callback={(query: string) => folderStructureStore.filteredFolderStructure(query)}
      />
    </div>
  );
};

export default FolderStructureToolbar;
