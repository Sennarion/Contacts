export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface INewContact {
  name: string;
  number: string;
}

export interface IContact {
  id: string;
  name: string;
  number: string;
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
  error: unknown;
  filter: string;
  contactToUpdate: IContact;
}

export interface AuthState {
  user: IUser;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: unknown;
}
