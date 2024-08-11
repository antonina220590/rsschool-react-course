import axios from 'axios';
import { IPlanet, IResponseResult } from '../../components/utils/interface';

export const fetchPlanets = async (page: number): Promise<IResponseResult> => {
  const response = await axios.get(`https://swapi.dev/api/planets`, {
    params: { page },
  });
  return response.data;
};

export const fetchPlanetById = async (id: number): Promise<IPlanet> => {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}`);
    return response.data;
  } catch (error) {
    Error('Failed to fetch planet');
    throw error;
  }
};
