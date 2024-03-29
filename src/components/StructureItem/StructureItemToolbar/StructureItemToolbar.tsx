import {
  STRUCTURE_ITEM_TYPE,
  StructureItemType
} from '../../../store/_common/types/folderStructureTypes';
import DeleteItemBtn from './DeleteItemBtn/DeleteItemBtn';
import ShowChildrenBtn from './ShowChildrenBtn/ShowChildrenBtn';

interface Props {
  data: StructureItemType;
}

const StructureItemToolbar: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { type } = data;

  return (
    <section className="structure-item_toolbar">
      {type === STRUCTURE_ITEM_TYPE.FOLDER && <ShowChildrenBtn folder={data} />}
      <DeleteItemBtn data={data} />
    </section>
  );
};

export default StructureItemToolbar;
