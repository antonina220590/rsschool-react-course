import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import Pagination from '../pagination';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Pagination Component', () => {
  const mockPush = vi.fn();
  beforeEach(() => {
    (useRouter as unknown).mockReturnValue({
      query: {},
      push: mockPush,
    });
  });

  it('renders the current page correctly', () => {
    render(<Pagination currentPage={1} />);

    const currentPageText = screen.getByTestId('curr-page');
    expect(currentPageText).toHaveTextContent('1');
  });

  it('navigates to the previous page when Prev button is clicked', () => {
    render(<Pagination currentPage={2} />);
    const prevButton = screen.getByTestId('prev-button');
    fireEvent.click(prevButton);

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '1' },
    });
  });

  it('navigates to the next page when Next button is clicked', () => {
    render(<Pagination currentPage={2} />);
    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/',
      query: { page: '3' },
    });
  });
});
