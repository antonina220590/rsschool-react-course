import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { IPlanet, IResponseResult } from '../../components/utils/interface';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: (builder) => ({
    getAllPlanets: builder.query<
      IResponseResult,
      { page: number; search?: string }
    >({
      query: ({ page, search = '' }) =>
        `/planets?page=${page}&search=${search}`,
    }),
    getPlanet: builder.query<IPlanet, number>({
      query: (id: number) => `/planets/${id}`,
    }),
  }),
  // endpoints: (builder) => ({
  //   getAllPlanets: builder.query<
  //     IResponseResult,
  //     { page: number; search?: string }
  //   >({
  //     query: (params = { page, search: '' }) => ({
  //       url: `/planets`,
  //       params,
  //     }),
  //   }),
  //   getPlanet: builder.query<IPlanet, number>({
  //     query: (id: number) => ({
  //       url: `/planets/${id}`,
  //     }),
  //   }),
  // }),
});

export const {
  useGetPlanetQuery,
  useGetAllPlanetsQuery,
  util: { getRunningQueriesThunk },
} = apiSlice;

export const { getAllPlanets, getPlanet } = apiSlice.endpoints;
