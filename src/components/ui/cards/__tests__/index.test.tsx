import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Cards from '../cards';
import { IPlanet } from '../../../utils/interface';
import { store } from '../../../../lib/store';

vi.mock('axios');

describe('Cards Component', () => {
  it('renders planet details correctly', async () => {
    const planet: IPlanet = {
      name: 'Hoth',
      url: 'https://swapi.dev/api/planets/3/',
    };

    render(
      <Provider store={store}>
        <Cards name={planet.name} url={planet.url} />
      </Provider>
    );

    const planetName = screen.getByText('Hoth');
    expect(planetName).toBeInTheDocument();
  });

  it('fetches planet data on mount', async () => {
    const planet: IPlanet = {
      name: 'Tatooine',
      url: 'https://swapi.dev/api/planets/1/',
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: planet });

    render(
      <Provider store={store}>
        <Cards name={planet.name} url={planet.url} />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Tatooine')).toBeInTheDocument();
    });
  });
});
