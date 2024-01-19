import { ReactNode } from 'react';
import StructureItemToolbar from '../StructureItemToolbar/StructureItemToolbar';
import { FileItemIF, FolderItemIF } from '../../../store/_common/types/folderStructureTypes';

interface Props {
  data: FolderItemIF | FileItemIF;
  children: ReactNode;
}

const StructureItemWrapper = (props: Props) => {
  const { data, children } = props;

  return (
    <div className="structure-item">
      <StructureItemToolbar data={data} />
      {children}
    </div>
  );
};

export default StructureItemWrapper;
