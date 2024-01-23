import { useStore } from '../../../hooks';
import {
  STRUCTURE_ITEM_TYPE,
  StructureItemType
} from '../../../store/_common/types/folderStructureTypes';
import FileItem from '../../StructureItem/FileItem/FileItem';
import FolderItem from '../../StructureItem/FolderItem/FolderItem';
import { observer } from 'mobx-react';
import LoaderIcon from '../../_icons/LoaderIcon';

const FolderStructureContent: React.FC = () => {
  const store = useStore();

  const { folderStructureStore } = store;
  const { rootFolder, isPending } = folderStructureStore;

  return (
    <div className="folder-structure_content">
      {isPending ? (
        <LoaderIcon />
      ) : rootFolder.length && rootFolder[0].visible ? (
        rootFolder.map((item: StructureItemType) => {
          const { id, type } = item;

          if (type === STRUCTURE_ITEM_TYPE.FILE) return <FileItem key={id} data={item} />;
          return <FolderItem key={id} data={item} />;
        })
      ) : (
        <h2 className="folder-structure_no-data">No stracture data</h2>
      )}
    </div>
  );
};

export default observer(FolderStructureContent);
