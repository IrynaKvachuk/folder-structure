import { useState } from 'react';
import RadioGroupWrapper from '../../_common/RadioGroup/RadioGroup';
import { ButtonWrapper } from '../../_common';
import { USER_ROLE_TYPE } from '../../../store/_common/types/userTypes';
import TitleWrapper from '../../_common/Title/Title';
import { useLocalStorage, useStore } from '../../../hooks';
import { LocalStorageType } from '../../../store/_common/types/baseTypes';
import { STORAGE_VARIABLE } from '../../../store/_common/variables';
import { LoginFormData, handleLoginSubmit, setRole } from './utils';

const roleValues = [
  { label: 'admin', value: 'admin' },
  { label: 'user', value: 'user' },
  { label: 'viewer', value: 'viewer' }
];

interface Props {
  callback?: () => void;
}

// Login form goes here
const Login: React.FC<Props> = (props: Props) => {
  const { callback = () => {} } = props;

  const [storageData, setStorageData] = useLocalStorage<LocalStorageType>(STORAGE_VARIABLE);
  const { role: storageRole } = storageData.userData;

  const store = useStore();
  const { userStore } = store;

  const [formData, setFormData] = useState<LoginFormData>({ role: storageRole as USER_ROLE_TYPE });

  return (
    <form
      className="login-form"
      onSubmit={(event) => handleLoginSubmit({ event, formData, userStore, callback })}
    >
      <TitleWrapper size="md"> Please, choose your role:</TitleWrapper>
      <div className="login-form_content">
        <fieldset className="login-form_radio-role">
          <RadioGroupWrapper
            name="userRole"
            title="User role: "
            items={roleValues}
            callback={(role) => setRole({ role, setFormData })}
          />
        </fieldset>
      </div>
      <ButtonWrapper type="submit" buttonClassName="login-form_submin-btn">
        Submit
      </ButtonWrapper>
    </form>
  );
};

export default Login;
