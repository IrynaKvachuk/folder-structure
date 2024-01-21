import { observer } from 'mobx-react';
import { FileItemIF } from '../../../store/_common/types/folderStructureTypes';
import DocumentIcon from '../../_icons/DocumentIcon';
import StructureItemWrapper from '../StructureItemWrapper/StructureItemWrapper';

interface Props {
  data: FileItemIF;
}

const FileItem: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { name, visible } = data;

  return visible ? (
    <StructureItemWrapper data={data}>
      <div className="structure-item_file">
        <DocumentIcon size={20} />
        {name}
      </div>
    </StructureItemWrapper>
  ) : null;
};

export default observer(FileItem);
