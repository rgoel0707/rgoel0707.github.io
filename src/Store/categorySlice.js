import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: {}
  },
  reducers: {
    addCategory: (state, action) => {
      const { id, name } = action.payload;
      state.categories[id] = {
        id: id,
        name: name,
      }
    },
  },
});

export const categoriesSelector = (state) => state.categories.categories;
export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
