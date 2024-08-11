import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/utils/searchSlice';
import favouritesReducer from '../components/utils/favouritesSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  favourites: favouritesReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
