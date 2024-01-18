import { ReactNode } from 'react';
import StructureItemToolbar from '../StructureItemToolbar/StructureItemToolbar';
import { DispatchT, SetStateActionT } from '../../../stores/_common/types/baseTypes';

interface Props {
  isEmpty: boolean;
  children: ReactNode;
  showChildren?: boolean;
  setShowChildren?: DispatchT<SetStateActionT<boolean>>;
}

const StructureItemWrapper = (props: Props) => {
  const { isEmpty, children, showChildren = true, setShowChildren = () => {} } = props;

  return (
    <div className="structure-item">
      <StructureItemToolbar
        isEmpty={isEmpty}
        showChildren={showChildren}
        setShowChildren={setShowChildren}
      />
      {children}
    </div>
  );
};

export default StructureItemWrapper;
