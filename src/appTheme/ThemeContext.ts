import { createContext } from 'react';

export enum AppTheme {
  LIGHT = 'light-mode',
  DARK = 'dark-mode',
}

export interface ThemeContextProps {
  theme?: AppTheme;
  setTheme?: (theme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const APP_THEME_LOCAL_STORAGE_KEY = 'app_theme';


