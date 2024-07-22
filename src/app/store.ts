import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/utils/counterSlice';
import searchReducer from '../components/utils/searchSlice';
import apiSlice from '../components/api/apiSlices';
import favouritesReducer from '../components/utils/favouritesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    favourites: favouritesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
