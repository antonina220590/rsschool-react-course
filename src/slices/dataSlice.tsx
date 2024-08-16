import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Data {
  value?: string;
  label?: string;
  name?: string;
  age?: number;

  email?: string;
  password?: string;
  gender?: string;
  conditions?: boolean;
}

interface DataState {
  countries: Data[];
  selectedCountry: Data[];
  name: Data[];
  age: Data[];
  email: Data[];
  password: Data[];
  gender: Data[];
  conditions: Data[];
}

const initialState: DataState = {
  countries: [
    { value: 'China', label: 'China' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Belarus', label: 'Belarus' },
  ],
  selectedCountry: [],
  name: [],
  age: [],
  email: [],
  password: [],
  gender: [],
  conditions: [],
};

const dataSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSelectedCountry: (state, action: PayloadAction<Data>) => {
      state.selectedCountry.push(action.payload);
    },
    setName: (state, action: PayloadAction<Data>) => {
      state.name.push(action.payload);
    },
    setAge: (state, action: PayloadAction<Data>) => {
      state.age.push(action.payload);
    },
    setEmail: (state, action: PayloadAction<Data>) => {
      state.email.push(action.payload);
    },
    setPassword: (state, action: PayloadAction<Data>) => {
      state.password.push(action.payload);
    },
    setGender: (state, action: PayloadAction<Data>) => {
      state.gender.push(action.payload);
    },
    setConditions: (state, action: PayloadAction<Data>) => {
      state.conditions.push(action.payload);
    },
  },
});

export const {
  setSelectedCountry,
  setName,
  setAge,
  setEmail,
  setPassword,
  setGender,
  setConditions,
} = dataSlice.actions;
export default dataSlice.reducer;
