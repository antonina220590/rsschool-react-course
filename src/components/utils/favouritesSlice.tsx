import { createSlice } from '@reduxjs/toolkit';
import { IPlanet } from './interface';

const initialState: object[] = [];

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.push(action.payload);
    },
    deleteFromFav: (state, action) => {
      const { title } = action.payload;
      if (state.length) {
        return state.filter((planet: IPlanet) => planet.name !== title);
      }
      return state.splice(0, state.length);
    },
  },
});

export const { addToFav, deleteFromFav } = favouritesSlice.actions;
export default favouritesSlice.reducer;
