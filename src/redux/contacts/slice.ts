import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContacts,
  createContact,
  deleteContact,
  updateContact,
} from './operations';
import { ContactsState } from 'types/types';

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
  contactToUpdate: {
    id: '',
    name: '',
    number: '',
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    setContactToUpdate(state, { payload }) {
      state.contactToUpdate = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const contactIdx = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(contactIdx, 1, payload);
        state.contactToUpdate = {
          id: '',
          name: '',
          number: '',
        };
      })
      .addMatcher(
        isAnyOf(
          getContacts.fulfilled,
          createContact.fulfilled,
          deleteContact.fulfilled,
          updateContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.pending,
          createContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          createContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter, setContactToUpdate } = contactsSlice.actions;
