import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DownloadButton from '../downloadBtn';
import { rootReducer } from '../../../../../lib/store';

const createMockStore = (initialState = {}) => {
  return createStore(rootReducer, initialState);
};

describe('DownloadButton Component', () => {
  it('renders download link with correct attributes when favourites list is populated', () => {
    const mockState = {
      favourites: [
        { name: 'Tatooine', url: 'https://swapi.dev/api/planets/1/' },
        { name: 'Alderaan', url: 'https://swapi.dev/api/planets/2/' },
      ],
    };

    const store = createMockStore(mockState);

    render(
      <Provider store={store}>
        <DownloadButton />
      </Provider>
    );

    const downloadLink = screen.getByTestId('download');
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('download', '2_planets.csv');
    expect(downloadLink).toHaveAttribute('href');
  });
});
