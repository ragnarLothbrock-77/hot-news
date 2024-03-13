import { Outlet } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { AuthControl } from 'widgets/AuthControl';

export const App = () => {
  const { theme } = useAppTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme])

  return (
    <div className={cn('app', {}, [theme])}>
      <div className="content-page">
        <Sidebar />
        <div className='page-wrapper'>
          <Outlet />
        </div>
        <div className="controls">
          <AuthControl />
        </div>
      </div>
    </div>
  )
}
