import { createContext, useState, ReactNode, useMemo } from 'react';
import { ThemeColor, ThemeProps } from '../components/utils/interface';

export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setTheme] = useState<ThemeColor>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const value = useMemo(() => ({ currentTheme, toggleTheme }), [currentTheme]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
