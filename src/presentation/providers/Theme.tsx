import { useEffect, useMemo, useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((previous) =>
      previous === 'light' ? 'dark' : 'light'
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};