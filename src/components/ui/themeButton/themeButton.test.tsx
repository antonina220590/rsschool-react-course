import { screen } from '@testing-library/react';
import renderWithProviders from '../../utils/test-utils';
import ThemeBtn from './themeButton';

describe('ThemeBtn', () => {
  it('should render theme changer', () => {
    renderWithProviders(<ThemeBtn />);
    expect(
      screen.getByLabelText('Dark Theme', {
        selector: 'input',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Light Theme', {
        selector: 'input',
      })
    ).toBeInTheDocument();
  });
});
