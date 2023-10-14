import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  totalCount: 0,
  totalPrice: 0,
  findBook: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAddedBook: (state, action) => {
      const findAddedBook = state.books.find((book) => book.id === action.payload.id);
      if (findAddedBook) {
        findAddedBook.count++;
        state.totalCount++;
        state.totalPrice += findAddedBook.discountPrice;
      } else {
        state.totalPrice += action.payload.discountPrice;
        state.books.push({
          ...action.payload,
          count: 1,
        });
        state.totalCount++;
      }
    },
    setMinusBook: (state, action) => {
      const findItem = state.books.find((item) => item.id === action.payload.id);
      if (findItem.count != 1) {
        if (findItem) {
          findItem.count--;
          state.totalCount--;
          state.totalPrice -= findItem.discountPrice;
        }
      }
    },
    removeBook: (state, action) => {
      const findItem = state.books.find((item) => item.id === action.payload.id);
      state.books = state.books.filter((el) => el.id !== action.payload.id);
      state.totalCount -= findItem.count;
      state.totalPrice -= findItem.discountPrice * findItem.count;
    },
    clearCart: (state) => {
      state.books = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { setAddedBook, setMinusBook, removeBook, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
