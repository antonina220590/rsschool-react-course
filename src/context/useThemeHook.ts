import { useContext } from 'react';
import { ThemeProps } from '../components/utils/interface';
import { ThemeContext } from './themeContext';

const useTheme = (): ThemeProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Error!');
  }
  return context;
};
export default useTheme;
