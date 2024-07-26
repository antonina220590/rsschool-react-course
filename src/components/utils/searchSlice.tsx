import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const planetSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = planetSearchSlice.actions;
export default planetSearchSlice.reducer;
