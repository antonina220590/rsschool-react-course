import { configureStore } from '@reduxjs/toolkit';
import imageReducer, { ImageState } from '../slices/imageSlice';
import dataReducer from '../slices/dataSlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
    data: dataReducer,
  },
});

export type RootState = {
  image: ImageState;
};

export default store;
