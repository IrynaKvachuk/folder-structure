import { FormEvent, useState } from 'react';
import RadioGroupWrapper from '../../_common/RadioGroup/RadioGroup';
import { ButtonWrapper } from '../../_common';
import { USER_ROLE_TYPE } from '../../../store/_common/types/userTypes';
import TitleWrapper from '../../_common/Title/Title';

const roleValues = [
  { label: 'admin', value: 'admin' },
  { label: 'user', value: 'user' },
  { label: 'viewer', value: 'viewer' }
];

type LoginFormData = {
  role: USER_ROLE_TYPE;
};

// here goes Login form
const Login = () => {
  const defaultRole = roleValues[2];
  const [formData, setFormData] = useState<LoginFormData>({
    role: defaultRole.value as USER_ROLE_TYPE
  });
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const setRole = (role: string) => {
    setFormData((prevState) => ({ ...prevState, role: role as USER_ROLE_TYPE }));
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TitleWrapper size="md"> Please, choose your role:</TitleWrapper>
      <div className="login-form_content">
        <fieldset className="login-form_radio-role">
          <RadioGroupWrapper
            name="userRole"
            title="User role: "
            items={roleValues}
            defaultValue={defaultRole}
            callback={setRole}
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
