import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = slice.actions;

export default slice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: { filter: '' },
//   reducers: {
//     setFilterContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { setFilterContacts } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
// export const selectNameFilter = (state) => state.filter.name;