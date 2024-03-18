export interface User {
  id: string;
  login: string;
}

export interface UserShema {
  authData?: User;
}
