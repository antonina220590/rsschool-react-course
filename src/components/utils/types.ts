import { apiSlice } from '../../lib/api/apiSlices';

export interface IRootState {
  counter: {
    value: number;
  };
  search: {
    value: string;
  };
  favourites: object[];
  [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
}
