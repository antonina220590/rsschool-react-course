import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../slices/imageSlice';
import countryReducer from '../slices/countrySlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
    country: countryReducer,
  },
});

export default store;
