import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [
    { value: 'China', label: 'China' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Belarus', label: 'Belarus' },
  ],
  selectedCountry: null,
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setSelectedCountry } = countrySlice.actions;
export default countrySlice.reducer;
