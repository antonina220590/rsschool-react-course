import { createContext, ReactNode, useMemo, useState } from 'react';

type ProviderProps = {
  children: ReactNode;
  initial: 'dark' | 'light';
};

interface ThemeContextType {
  darkTheme: 'dark' | 'light';
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}
export const ThemeContext = createContext<ThemeContextType>({
  darkTheme: 'dark',
  setTheme: () => {},
});

export default function ThemeProvider({
  children,
  initial = 'dark',
}: ProviderProps) {
  const [darkTheme, setTheme] = useState(initial);
  const value = useMemo(() => ({ darkTheme, setTheme }), [darkTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
