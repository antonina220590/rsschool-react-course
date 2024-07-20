import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPlanet, IResponseResult } from '../utils/interface';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getAllPlanets: builder.query<
      IResponseResult,
      { page: number; search?: string }
    >({
      query: (params = { page: 1, search: '' }) => ({
        url: `/planets`,
        params,
      }),
    }),
    getPlanet: builder.query<IPlanet, number>({
      query: (id: number) => ({
        url: `/planets/${id}`,
      }),
    }),
  }),
});

export default apiSlice;
