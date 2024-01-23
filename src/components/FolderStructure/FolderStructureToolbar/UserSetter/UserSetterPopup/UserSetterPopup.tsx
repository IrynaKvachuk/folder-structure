import { observer } from 'mobx-react';
import { useStore } from '../../../../../hooks';
import Modal from '../../../../../layout/Modal/Modal';
import { MODAL_TYPE } from '../../../../../store/_common/types/modalTypes';
import Login from '../../../../auth/Login/Login';

const UserSetterPopup = () => {
  const store = useStore();
  const { modalStore } = store;
  const { type, isOpen } = modalStore;
  const isUserSetterOpen = isOpen && type === MODAL_TYPE.LOGIN;

  return (
    <Modal
      isOpen={isUserSetterOpen}
      shouldCloseOnOverlayClick
      onClose={() => modalStore.toggleModal(MODAL_TYPE.LOGIN, false)}
      className="user-setter_popup"
    >
      <Login />
    </Modal>
  );
};

export default observer(UserSetterPopup);
