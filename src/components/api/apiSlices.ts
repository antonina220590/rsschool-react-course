import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPlanet } from '../utils/interface';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    fetchPlanet: build.query<IPlanet, number>({
      query: (id: number) => ({
        url: `/planets/${id}`,
      }),
    }),
  }),
});

export default apiSlice;
