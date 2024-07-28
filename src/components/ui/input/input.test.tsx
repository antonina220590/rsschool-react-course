import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { http, HttpResponse, delay } from 'msw';
import { setupServer } from 'msw/node';
import renderWithProviders from '../../utils/test-utils';
import SearchPage from '../MainPage/SearchPage';

export const handlers = [
  http.get('https://swapi.dev/api/planets/*', async () => {
    await delay(150);
    return HttpResponse.json('1');
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('search input functionality', () => {
  test('should display item based on the search input data', async () => {
    renderWithProviders(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'Tatooine' } });
    const searchBtn = screen.getByTestId('search');
    fireEvent.click(searchBtn);

    const item = await screen.findByText(/Tatooine/i);
    expect(item).toBeInTheDocument();
  });
});
export default handlers;
