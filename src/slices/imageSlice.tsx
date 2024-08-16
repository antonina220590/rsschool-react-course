import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseImage: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action) => {
      state.baseImage = action.payload;
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
