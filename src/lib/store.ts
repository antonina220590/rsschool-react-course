import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import counterReducer from '../components/utils/counterSlice';
import searchReducer from '../components/utils/searchSlice';
import { apiSlice } from './api/apiSlices';
import favouritesReducer from '../components/utils/favouritesSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
  favourites: favouritesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
