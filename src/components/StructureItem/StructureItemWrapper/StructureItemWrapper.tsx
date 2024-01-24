import { ReactNode } from 'react';
import StructureItemToolbar from '../StructureItemToolbar/StructureItemToolbar';
import { StructureItemType } from '../../../store/_common/types/folderStructureTypes';

interface Props {
  data: StructureItemType;
  children: ReactNode;
}

const StructureItemWrapper = (props: Props) => {
  const { data, children } = props;
  const { id, rights } = data;

  return (
    <div className="structure-item" data-id={id}>
      <div className={`structure-item_user-marker ${rights}`} />
      <StructureItemToolbar data={data} />
      {children}
    </div>
  );
};

export default StructureItemWrapper;
