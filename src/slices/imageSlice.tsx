import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Image {
  image?: string;
}

export interface ImageState {
  baseImage: Image[];
}

const initialState: ImageState = {
  baseImage: [],
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<Image>) => {
      state.baseImage.push(action.payload);
    },
  },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
