import { ButtonWrapper } from '../../../_common';
import ToolbarItem from '../ToolbarItem/ToolbarItem';
import { StructureItemType } from '../../../../store/_common/types/folderStructureTypes';
import { useStore } from '../../../../hooks/useStore';

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
      <ButtonWrapper onClick={handleDeleteItem}>x</ButtonWrapper>
    </ToolbarItem>
  );
};

export default DeleteItemBtn;
