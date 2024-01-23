export enum USER_ROLE_TYPE {
  ADMIN = 'admin',
  USER = 'user',
  VIEWER = 'viewer'
}

export interface LoginDataIE {
  login: string;
}

export interface UserIE {
  id: string;
  role: USER_ROLE_TYPE;
}
