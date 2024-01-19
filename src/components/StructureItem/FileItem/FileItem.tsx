import { FileItemIF } from '../../../store/_common/types/folderStructureTypes';
import DocumentIcon from '../../_icons/DocumentIcon';
import StructureItemWrapper from '../StructureItemWrapper/StructureItemWrapper';

interface Props {
  data: FileItemIF;
}

const FileItem: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { name } = data;

  return (
    <StructureItemWrapper data={data}>
      <div className="structure-item_file">
        <DocumentIcon size={20} />
        {name}
      </div>
    </StructureItemWrapper>
  );
};

export default FileItem;
