import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value += 1;
    },
    decremented(state) {
      state.value -= 1;
    },

    reset(state) {
      state.value = initialState.value;
    },
    setPage(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { incremented, decremented, reset, setPage } =
  counterSlice.actions;
export default counterSlice.reducer;
