import { DispatchT, SetStateActionT } from '../../../stores/_common/types/baseTypes';
import ShowChildrenBtn from './ShowChildrenBtn/ShowChildrenBtn';

interface Props {
  isEmpty: boolean;
  showChildren: boolean;
  setShowChildren: DispatchT<SetStateActionT<boolean>>;
}

const StructureItemToolbar: React.FC<Props> = (props: Props) => {
  const { isEmpty, showChildren, setShowChildren } = props;

  return (
    <section className="structure-item_toolbar">
      <ShowChildrenBtn
        visible={!isEmpty}
        showChildren={showChildren}
        setShowChildren={setShowChildren}
      />
    </section>
  );
};

export default StructureItemToolbar;
