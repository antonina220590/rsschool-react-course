import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { IPlanet } from './interface';

const initialState: object[] = [];

interface HydrateAction {
  type: typeof HYDRATE;
  payload: {
    favourites: IPlanet[];
  };
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<IPlanet>) => {
      state.push(action.payload);
    },
    deleteFromFav: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;

      return state.filter((planet: IPlanet) => planet.name !== title);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction) => {
      return {
        ...state,
        ...action.payload.favourites,
      };
    });
  },
});

export const { addToFav, deleteFromFav } = favouritesSlice.actions;
export default favouritesSlice.reducer;
