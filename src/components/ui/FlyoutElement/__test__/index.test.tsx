import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import configureStore from 'redux-mock-store';
import Flyout from '../flyout';

const middlewares = [];
const mockStore = configureStore(middlewares);

vi.mock('react-redux', async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    useAppDispatch: () => vi.fn(),
    useAppSelector: vi.fn(),
  };
});

describe('Flyout Component', () => {
  let store;

  beforeEach(() => {
    const initialState = {
      favourites: [],
    };

    store = mockStore(initialState);
  });

  it('renders the Flyout with favourites info', () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>
    );

    expect(screen.getByTestId('text')).toBeInTheDocument();
  });
});
