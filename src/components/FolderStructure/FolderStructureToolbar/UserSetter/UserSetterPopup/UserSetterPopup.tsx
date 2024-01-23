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

  const closeModal = () => modalStore.toggleModal(MODAL_TYPE.LOGIN, false);

  return (
    <Modal
      isOpen={isUserSetterOpen}
      shouldCloseOnOverlayClick
      onClose={closeModal}
      className="user-setter_popup"
    >
      <Login callback={closeModal} />
    </Modal>
  );
};

export default observer(UserSetterPopup);
