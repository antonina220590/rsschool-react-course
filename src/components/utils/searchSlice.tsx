/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SearchValue {
  value: string;
}

const initialState: SearchValue = {
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
