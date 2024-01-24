import { ButtonWrapper } from '../../../_common';
import ArrowIcon from '../../../_icons/ArrowIcon';
import ToolbarItem from '../ToolbarItem/ToolbarItem';
import { FolderItemIF } from '../../../../store/_common/types/folderStructureTypes';
import { useStore } from '../../../../hooks';

interface Props {
  folder: FolderItemIF;
}

const ShowChildrenBtn: React.FC<Props> = (props: Props) => {
  const { folder } = props;
  const { isOpen, children } = folder;

  const store = useStore();
  const { folderStructureStore } = store;

  const handleToggle = () => {
    folderStructureStore.toggleFolder(folder);
  };

  return children?.length ? (
    <ToolbarItem>
      <ButtonWrapper
        title="show-children-btn"
        buttonClassName="show-children-btn"
        onClick={handleToggle}
      >
        <ArrowIcon size={20} className={isOpen ? 'rotate--270' : 'rotate--90'} />
      </ButtonWrapper>
    </ToolbarItem>
  ) : null;
};

export default ShowChildrenBtn;
