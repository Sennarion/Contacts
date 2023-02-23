import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from 'types/types';

const initialState: GlobalState = {
  isAddContactModalOpen: false,
  isUpdateContactModalOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleAddContactModal(state) {
      state.isAddContactModalOpen = !state.isAddContactModalOpen;
    },
    toggleUpdateContactModal(state) {
      state.isUpdateContactModalOpen = !state.isUpdateContactModalOpen;
    },
  },
});

export const globalReducer = globalSlice.reducer;

export const { toggleAddContactModal, toggleUpdateContactModal } =
  globalSlice.actions;
