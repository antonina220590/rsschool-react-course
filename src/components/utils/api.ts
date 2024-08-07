/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchPlanets = async (page: number, search: string = '') => {
  const response = await axios.get('https://swapi.dev/api/planets/', {
    params: { page, search },
  });
  return response.data;
};
