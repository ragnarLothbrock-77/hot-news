import { useMemo, useState, FC, ReactNode } from 'react';
import { APP_THEME_LOCAL_STORAGE_KEY, AppTheme, ThemeContext } from './ThemeContext';

const appDefaultThemeValue = localStorage.getItem(
  APP_THEME_LOCAL_STORAGE_KEY) as AppTheme || AppTheme.LIGHT;

interface ProviderProps {
  children: ReactNode;
  initialTheme?: AppTheme
}

export const AppThemeProvider: FC<ProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<AppTheme>(initialTheme || appDefaultThemeValue);
  const currentTheme = initialTheme ?? appDefaultThemeValue;
  document.documentElement.dataset.theme = currentTheme;

  const appThemeDefaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={appThemeDefaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
