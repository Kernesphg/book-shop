import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryType: 'Все',
  sortTypeObj: {
    name: 'популярности',
    sortType: 'rating',
  },
  orderType: true,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryType: (state, action) => {
      state.categoryType = action.payload;
    },
    setSortType: (state, action) => {
      state.sortTypeObj = action.payload;
    },
    setOrderType: (state, action) => {
      state.orderType = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryType, setSortType, setOrderType, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
