import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import countriesList from './countryList';

interface Data {
  validName?: string;
  name?: string;
  age?: number;
  country?: string;
  email?: string;
  password?: string;
  gender?: string;
  conditions?: boolean;
  image?: string[];
}

interface DataState {
  countries: string[];
  submissions: Data[];
}

const initialState: DataState = {
  countries: countriesList,
  submissions: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSubmission: (state, action: PayloadAction<Data>) => {
      state.submissions.push(action.payload);
    },
  },
});

export const { setSubmission } = dataSlice.actions;
export default dataSlice.reducer;
