import { FileItemIF } from '../../../stores/_common/types/folderStructure';
import DocumentIcon from '../../_icons/DocumentIcon';
import StructureItemWrapper from '../StructureItemWrapper/StructureItemWrapper';

interface Props {
  data: FileItemIF;
}

const FileItem: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { name } = data;

  return (
    <StructureItemWrapper isEmpty={true}>
      <div className="structure-item_file">
        <DocumentIcon size={20} />
        {name}
      </div>
    </StructureItemWrapper>
  );
};

export default FileItem;
