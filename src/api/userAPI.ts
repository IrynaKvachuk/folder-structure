import { LoginDataIE, UserIE } from '../store/_common/types/userTypes';

const users = new Map([
  [
    'admin',
    {
      id: 'w9b1web4d-3b8d-4bad-9bnd-2b0d7b3sdc6d',
      role: 'admin'
    }
  ],
  [
    'user',
    {
      id: 'sdwe6w0flm-3wdd-4b23-9bdwd-2b0dsvb3sdc6d',
      role: 'user'
    }
  ],
  [
    'viewer',
    {
      id: 'vd2e6scflm-3wdd-cd23-9bdsd-2b0dsvb3sdc6d',
      role: 'viewer'
    }
  ]
]);

export const getUserData = async (loginData: LoginDataIE): Promise<UserIE> => {
  // data received from API
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.get(loginData.login));
    }, 1000);
  });
  const data = (await response) as UserIE;

  return data;
};
