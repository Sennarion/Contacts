import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IContact, INewContact } from 'types/types';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk<any, INewContact>(
  'contacts/createContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', newContact);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk<any, string>(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk<any, IContact>(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, { name, number });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
