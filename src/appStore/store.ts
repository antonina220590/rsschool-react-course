import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/utils/counterSlice';
import searchReducer from '../components/utils/searchSlice';
import apiSlice from '../components/api/apiSlices';
import favouritesReducer from '../components/utils/favouritesSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
  favourites: favouritesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
