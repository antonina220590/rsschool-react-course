import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.push(action.payload);
    },
    deleteFromFav: (state, action) => {
      const { title } = action.payload;
      return state.filter((planet) => planet !== title);
    },
  },
});

export const { addToFav, deleteFromFav } = favouritesSlice.actions;
export default favouritesSlice.reducer;
