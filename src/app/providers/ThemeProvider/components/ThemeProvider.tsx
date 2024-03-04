import { useMemo, useState, FC, ReactNode } from 'react';
import { APP_THEME_LOCAL_STORAGE_KEY, AppTheme, ThemeContext } from './ThemeContext';

const appDefaultThemeValue = localStorage.getItem(
  APP_THEME_LOCAL_STORAGE_KEY) as AppTheme || AppTheme.LIGHT;

interface ProviderProps {
  children: ReactNode
}

export const AppThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(appDefaultThemeValue);

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
