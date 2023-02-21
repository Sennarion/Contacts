import { createSlice } from '@reduxjs/toolkit';

interface IState {
  [example: string]: string;
}

const initialState: IState = {
  example: 'example',
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    doSomething(state, action) {
      state.example = action.payload;
    },
  },
});

export const exampleReducer = exampleSlice.reducer;
export const { doSomething } = exampleSlice.actions;
