import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useAppTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <div className="content-page">
        <Sidebar />
        <div className='page-wrapper'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}
