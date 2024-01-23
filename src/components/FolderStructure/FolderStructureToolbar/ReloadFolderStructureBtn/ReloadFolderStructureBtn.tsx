import { observer } from 'mobx-react';
import { useStore } from '../../../../hooks';
import { ButtonWrapper } from '../../../_common';

const ReloadFolderStructureBtn = () => {
  const store = useStore();

  const { folderStructureStore } = store;

  return (
    <ButtonWrapper
      buttonClassName="folder-structure_toolbar__reload-btn"
      title="Reload structure folder"
      onClick={() => folderStructureStore.loadStructure()}
    >
      &#8635;
    </ButtonWrapper>
  );
};

export default observer(ReloadFolderStructureBtn);
