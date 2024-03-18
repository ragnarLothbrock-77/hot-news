import { Outlet } from 'react-router-dom';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { AuthControl } from 'widgets/AuthControl';
import { useAppDispatch } from './providers/StoreProvider';
import { userActions } from 'entities/User';

export const App = () => {
  const { theme } = useAppTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme])

  useEffect(() => {
    dispatch(userActions.checkExistingAuthData())
  }, [dispatch])

  return (
    <div className={cn('app', {}, [theme])}>
      <div className="app-wrapper">
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
