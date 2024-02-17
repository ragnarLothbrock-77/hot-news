import { useContext } from 'react';
import { APP_THEME_LOCAL_STORAGE_KEY, AppTheme, ThemeContext } from './ThemeContext';

interface AppThemeResult {
  toggleTheme: () => void;
  theme: AppTheme
}

export function useAppTheme(): AppThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const switchedTheme = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
    setTheme(switchedTheme);
    localStorage.setItem(APP_THEME_LOCAL_STORAGE_KEY, switchedTheme)
  }

  return {
    theme, toggleTheme
  }
}