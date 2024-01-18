import React, { useId, useState } from 'react';
import { FolderItemIF, STRUCTURE_ITEM_TYPE } from '../../../stores/_common/types/folderStructure';
import FolderIcon from '../../_icons/FolderIcon';
import FileItem from '../FileItem/FileItem';
import StructureItemWrapper from '../StructureItemWrapper/StructureItemWrapper';

interface Props {
  data: FolderItemIF;
}

const FolderItem: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { name, children } = data;

  const id = useId();
  const [showChildren, setShowChildren] = useState<boolean>(true);

  return (
    <StructureItemWrapper
      key={name}
      isEmpty={!data.children?.length}
      showChildren={showChildren}
      setShowChildren={setShowChildren}
    >
      {showChildren ? (
        <div className="structure-item_file">
          <FolderIcon size={20} />
          <div>{name}</div>
          <div style={{ marginLeft: '20px' }}>
            {children?.map((item, index) => (
              <React.Fragment
                key={id + name + index} // better to generate on back
              >
                {item.type === STRUCTURE_ITEM_TYPE.FOLDER ? (
                  <FolderItem data={item} />
                ) : (
                  <FileItem data={item} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </StructureItemWrapper>
  );
};

export default FolderItem;
