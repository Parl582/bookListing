import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  Error: false,
  Loading: false,
  currentPage: 1,
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

    NextPage: (state) => {
      if (state.currentPage < state.books.pagination.totalPages) {
        state.currentPage += 1;
      }
    },
    PrevPage: (state) => {
      if (state.currentPage === 1) {
        state.currentPage === 1;
        return;
      } else {
        state.currentPage -= 1;
      }
    },
  },
});

export const { getData, Loading, Error, NextPage, PrevPage } =
  bookSlice.actions;

export default bookSlice.reducer;
