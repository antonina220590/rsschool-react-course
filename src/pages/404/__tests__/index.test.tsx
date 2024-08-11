import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '..';

describe('NotFoundPage Component', () => {
  it('renders the heading', () => {
    render(<NotFoundPage />);

    const heading = screen.getByRole('heading', { name: /page not found/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the go home link', () => {
    render(<NotFoundPage />);

    const goHomeLink = screen.getByRole('link', { name: /go home/i });
    expect(goHomeLink).toBeInTheDocument();
  });

  it('renders the image', () => {
    render(<NotFoundPage />);

    const image = screen.getByAltText('not-found page');
    expect(image).toBeInTheDocument();
  });
});
