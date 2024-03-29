import React from 'react';
import {
  FolderItemIF,
  STRUCTURE_ITEM_TYPE,
  StructureItemType
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
  const { id, name, children, isOpen, visible, allowed } = data;

  return visible && allowed ? (
    <StructureItemWrapper key={id} data={data}>
      <div className="structure-item_folder">
        <div className="structure-item_folder__caption">
          <FolderIcon size={20} />
          <div>{name}</div>
        </div>
        {isOpen ? (
          <div style={{ marginLeft: '20px' }}>
            {children.map((item: StructureItemType) => (
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
  ) : null;
};

export default observer(FolderItem);
