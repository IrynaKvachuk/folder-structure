import { ButtonWrapper } from '../../../_common';
import ToolbarItem from '../ToolbarItem/ToolbarItem';
import { StructureItemType } from '../../../../store/_common/types/folderStructureTypes';
import { useStore } from '../../../../hooks';

interface Props {
  data: StructureItemType;
}

const DeleteItemBtn: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const { id } = data;

  const store = useStore();
  const { folderStructureStore } = store;

  const handleDeleteItem = () => {
    folderStructureStore.deleteItem(id);
  };

  return (
    <ToolbarItem>
      <ButtonWrapper
        buttonClassName="delete-item-btn"
        title="delete item"
        onClick={handleDeleteItem}
      >
        x
      </ButtonWrapper>
    </ToolbarItem>
  );
};

export default DeleteItemBtn;
