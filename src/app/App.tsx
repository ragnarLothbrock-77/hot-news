import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';


export const App = () => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className={cn('app', { 'hovered': false }, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Outlet />
    </div>
  )
}