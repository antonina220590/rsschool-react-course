import {
  fireEvent,
  queryByTestId,
  screen,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from '../../utils/test-utils';
import App from '../../../pages/_app';

describe('Flyout', () => {
  test('should render flyout element', async () => {
    renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const heartCheckbox = screen.queryByTestId('heart');
      expect(heartCheckbox).toBeInTheDocument();
    });
    screen.debug();

    const heartCheckbox = screen.getByTestId('heart');
    expect(heartCheckbox).toBeInTheDocument();
    fireEvent.change(heartCheckbox, { target: { checked: true } });

    const unselectBtn = await screen.findByTestId('unselect');
    expect(unselectBtn).toBeInTheDocument();
  });

  test('should not render flyout element', async () => {
    const { container } = renderWithProviders(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const unselectBtn = await screen.findByTestId('unselect');
    fireEvent.click(unselectBtn);

    await waitFor(() => {
      expect(queryByTestId(container, 'download')).not.toBeInTheDocument();
    });
    expect(queryByTestId(container, 'download')).not.toBeInTheDocument();
  });
});
