import { configureStore } from '@reduxjs/toolkit';
import { dataReducer, DataState } from '../slices/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export type RootState = {
  data: DataState;
};

export default store;
