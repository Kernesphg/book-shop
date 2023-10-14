import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './slices/filterSlice';
import cartReduser from './slices/cartSlice';
import bookReduser from './slices/booksSlice';

export const store = configureStore({
  reducer: { filter: filterReduser, cart: cartReduser, book: bookReduser },
});
