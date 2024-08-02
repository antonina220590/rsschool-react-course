import { setupStore } from '../../appStore/store';
import apiSlice from './apiSlices';

const { getAllPlanets, getPlanet } = apiSlice.endpoints;

describe('apiSlice', () => {
  const store = setupStore();

  it('get all planets', async () => {
    const result = await store.dispatch(
      getAllPlanets.initiate({ page: 1, search: 'Tatooine' })
    );

    expect(result.data).toHaveProperty('results');
    expect(result?.data?.results).toBeInstanceOf(Array);
  });

  it('get planet by id', async () => {
    const planetId = 1;
    const result = await store.dispatch(getPlanet.initiate(planetId));

    expect(result.data).toHaveProperty('name');
    expect(result?.data?.name).toEqual('Tatooine');
  });
});
