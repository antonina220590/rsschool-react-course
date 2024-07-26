import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from '../MainPage/SearchPage';
import NotFoundPage from './404Page';
import renderWithProviders from '../../utils/test-utils';

describe('404Page', () => {
  it('should render 404Page with message, image and go back button', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    const NotFoundPageText = screen.getByText('Page not found....');
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(NotFoundPageText).toBeInTheDocument();
  });

  it('should render the main page under the click on the Go Home button', () => {
    renderWithProviders(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
