import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../lib/store';
import App from './_app';
import { ThemeProvider } from '../context/themeContext';
import ErrorBoundary from '../components/utils/errorBoundary';

vi.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    push: vi.fn(),
    pathname: '/',
  }),
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    function Component() {
      return <div>Home Page</div>;
    }
    const pageProps = {};

    render(
      <Provider store={store}>
        <ThemeProvider initial="dark">
          {' '}
          <ErrorBoundary>
            <App Component={Component} pageProps={pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders Flyout component', () => {
    function Component() {
      return <div>Home Page</div>;
    }
    const pageProps = {};

    render(
      <Provider store={store}>
        <ThemeProvider initial="dark">
          <ErrorBoundary>
            <App Component={Component} pageProps={pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId('text')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
