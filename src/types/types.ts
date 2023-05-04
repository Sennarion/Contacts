export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials extends ILoginCredentials {
  name: string;
}

export interface INewContact {
  name: string;
  number: string;
}

export interface IContact extends INewContact {
  id: string;
}

export interface IUser {
  name: null | string;
  email: null | string;
}

export interface GlobalState {
  isAddContactModalOpen: boolean;
  isUpdateContactModalOpen: boolean;
}

export interface ContactsState {
  items: IContact[];
  isLoading: boolean;
  filter: string;
  contactToUpdate: IContact;
  error: unknown;
}

export interface AuthState {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: unknown;
}

export interface AuthResponse {
  user: IUser;
  token: string;
}
