import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useAppTheme } from 'app/providers/ThemeProvider';
import { Nabvar } from '../widgets/Navbar/ui/Nabvar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { theme } = useAppTheme();
  const { t } = useTranslation('main')

  return (
    <div className={cn('app', {}, [theme])}>
      <Nabvar />
      <div className="content-page">
        <Sidebar />
        <div className='page-wrapper'>
          {t('Main')}

        </div>
        <Outlet />
      </div>
    </div>
  )
}
