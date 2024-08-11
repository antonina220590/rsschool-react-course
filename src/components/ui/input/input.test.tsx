import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { useRouter } from 'next/router';
import Input from './input';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Input Component', () => {
  const pushMock = vi.fn();
  const queryMock = { search: '' };

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({
      query: queryMock,
      push: pushMock,
    });
  });

  it('renders the input and button', () => {
    render(<Input />);

    const inputElement = screen.getByTestId('search-input');
    const buttonElement = screen.getByTestId('search');

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'search.....');
  });

  it('updates the search value when typing', () => {
    render(<Input />);

    const inputElement = screen.getByTestId('search-input');

    fireEvent.change(inputElement, { target: { value: 'test search' } });

    expect(inputElement.value).toBe('test search');
  });

  it('calls router.push with search query on button click', () => {
    render(<Input />);

    const inputElement = screen.getByTestId('search-input');
    const buttonElement = screen.getByTestId('search');

    fireEvent.change(inputElement, { target: { value: 'test search' } });
    fireEvent.click(buttonElement);

    expect(pushMock).toHaveBeenCalledWith({
      query: { search: 'test search', page: 1 },
    });
  });
});
