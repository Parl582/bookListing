import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  Error: false,
  Loading: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    Loading: (state) => {
      state.Loading = true;
    },
    getData: (state, action) => {
      state.Loading = false;
      state.books = action.payload;
    },

    Error: (state) => {
      state.Error = true;
      state.Loading = false;
    },
  },
});

export const { getData, Loading, Error } = bookSlice.actions;

export default bookSlice.reducer;
