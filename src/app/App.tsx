import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';
import { Nabvar } from '../widgets/Navbar/ui/Nabvar';

export const App = () => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className={cn('app', { 'hovered': false }, [theme])}>
      <Nabvar />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Outlet />
    </div>
  )
}