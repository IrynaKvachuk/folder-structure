import { useStore } from '../../../../hooks';
import { MODAL_TYPE } from '../../../../store/_common/types/modalTypes';
import { ButtonWrapper } from '../../../_common';
import AvatarIcon from '../../../_icons/AvatarIcon';
import UserSetterPopup from './UserSetterPopup/UserSetterPopup';

const UserSetter = () => {
  const store = useStore();
  const { modalStore } = store;

  return (
    <div className="user-setter">
      <ButtonWrapper
        buttonClassName="user-setter_btn"
        onClick={() => modalStore.toggleModal(MODAL_TYPE.LOGIN, true)}
      >
        <AvatarIcon />
      </ButtonWrapper>
      <UserSetterPopup />
    </div>
  );
};

export default UserSetter;
