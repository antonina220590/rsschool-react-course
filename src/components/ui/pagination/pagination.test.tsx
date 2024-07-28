import { fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './pagination';
import renderWithProviders from '../../utils/test-utils';

describe('Pagination', () => {
  it('should render pagination ', () => {
    renderWithProviders(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    const prevBtn = screen.getByTestId('prev-button');
    expect(prevBtn).toBeInTheDocument();
    fireEvent.click(prevBtn);
    const nextBtn = screen.getByTestId('next-button');
    expect(nextBtn).toBeInTheDocument();
    fireEvent.click(nextBtn);
    expect(screen.getByText(/[1-6]/i)).toBeInTheDocument();
  });

  it("disables 'Prev' button on first page", () => {
    renderWithProviders(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );
    expect(screen.getByText(/[1]/i)).toBeInTheDocument();
    expect(screen.getByTestId('prev-button')).toBeDisabled();
  });
});
