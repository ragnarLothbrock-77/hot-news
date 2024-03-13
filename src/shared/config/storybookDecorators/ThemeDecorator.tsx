import { AppTheme, AppThemeProvider } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';

interface DecoratorProps {
  theme: AppTheme,
  children: ReactNode
}

export const ThemeDecorator = ({ theme, children }: DecoratorProps) => {
  document.documentElement.dataset.theme = theme;

  return (
    <AppThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>{children}</div>
    </AppThemeProvider>
  )
}
