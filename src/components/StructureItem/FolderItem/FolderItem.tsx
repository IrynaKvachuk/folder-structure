import React from 'react';
import {
  FileItemIF,
  FolderItemIF,
  STRUCTURE_ITEM_TYPE
} from '../../../store/_common/types/folderStructureTypes';
import FolderIcon from '../../_icons/FolderIcon';
import FileItem from '../FileItem/FileItem';
import StructureItemWrapper from '../StructureItemWrapper/StructureItemWrapper';
import { observer } from 'mobx-react';
import Folder from './FolderItem';

interface Props {
  data: FolderItemIF;
}

const FolderItem: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { id, name, children, isOpen } = data;

  return (
    <StructureItemWrapper key={id} data={data}>
      <div className="structure-item_file">
        <FolderIcon size={20} />
        <div>{name}</div>
        {isOpen ? (
          <div style={{ marginLeft: '20px' }}>
            {children?.map((item: FolderItemIF | FileItemIF) => (
              <React.Fragment key={item.id}>
                {item.type === STRUCTURE_ITEM_TYPE.FOLDER ? (
                  <Folder data={item} />
                ) : (
                  <FileItem data={item} />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </StructureItemWrapper>
  );
};

export default observer(FolderItem);
