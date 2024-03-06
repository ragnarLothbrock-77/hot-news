import { AppTheme } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';

interface DecoratorProps {
  theme: AppTheme,
  children: ReactNode
}

export const ThemeDecorator = ({ theme, children }: DecoratorProps) => (
  <div className={`app ${theme}`}>{children}</div>
)
