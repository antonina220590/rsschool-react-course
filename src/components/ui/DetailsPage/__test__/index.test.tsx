import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { IResponseResult } from '../../../utils/interface';
import CardDetails from '../DetailsPage';

const middlewares = [];
const mockStore = configureStore(middlewares);

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

const mockPush = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { planet: '1' },
    push: mockPush,
  }),
}));

describe('CardDetails Component', () => {
  let store: ReturnType<typeof mockStore>;

  const mockData: IResponseResult = {
    count: 1,
    next: null,
    previous: null,
    results: [
      {
        name: 'Tatooine',
        url: 'https://swapi.dev/api/planets/1/',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1',
        terrain: 'desert',
        population: '200000',
      },
    ],
    name: '',
    url: '',
  };

  beforeEach(() => {
    store = mockStore({
      favourites: [],
    });
  });

  it('renders planet details correctly', () => {
    render(
      <Provider store={store}>
        <CardDetails initialData={mockData} />
      </Provider>
    );

    const planetName = screen.getByText('Tatooine');
    expect(planetName).toBeInTheDocument();

    expect(screen.getByText(/Rotation Period:/)).toHaveTextContent(
      'Rotation Period: 23'
    );
    expect(screen.getByText(/Climate:/)).toHaveTextContent('Climate: arid');
  });
});
