import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ILoginCredentials,
  IRegisterCredentials,
  AuthResponse,
  IUser,
  AuthState,
} from 'types/types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(): void {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk<
  AuthResponse,
  IRegisterCredentials,
  { rejectValue: string }
>('auth/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch {
    return rejectWithValue('Failed to register. The email already exists');
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  ILoginCredentials,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch {
    return rejectWithValue('Failed to login. Incorrect email or password');
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch {
    return rejectWithValue('Failed to logout');
  }
});

export const refreshUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string | null; state: { auth: AuthState } }
>('auth/refresh', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return rejectWithValue(null);
  }

  try {
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch {
    return rejectWithValue('Failed to restore session');
  }
});
