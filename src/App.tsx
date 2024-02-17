import { Link, Outlet } from 'react-router-dom';
import './styles/index.scss';
import { useAppTheme } from './appTheme/useAppTheme';


export const App = () => {
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>
      <Outlet />
    </div>
  )
}