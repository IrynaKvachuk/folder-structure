import { ButtonWrapper } from '../../../_common';
import ArrowIcon from '../../../_icons/ArrowIcon';
import ToolbarItem from '../ToolbarItem/ToolbarItem';
import { DispatchT, SetStateActionT } from '../../../../stores/_common/types/baseTypes';

interface Props {
  visible: boolean;
  showChildren: boolean;
  setShowChildren: DispatchT<SetStateActionT<boolean>>;
}

const ShowChildrenBtn: React.FC<Props> = (props: Props) => {
  const { visible, showChildren, setShowChildren } = props;

  return visible ? (
    <ToolbarItem>
      <ButtonWrapper
        onClick={() => {
          setShowChildren((prevState) => !prevState);
        }}
      >
        <ArrowIcon size={20} className={showChildren ? 'rotate--270' : 'rotate--90'} />
      </ButtonWrapper>
    </ToolbarItem>
  ) : null;
};

export default ShowChildrenBtn;
