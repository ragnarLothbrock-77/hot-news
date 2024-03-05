import { cn } from 'shared/lib/classNames/classNames';
import classes from './MainPage.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorHandleButton } from 'app/providers/ErrorBoundary/ui/ErrorHandleButton';

interface MainPageProps {
  className?: string;
}

const MainPage = (props: PropsWithChildren<MainPageProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(classes.mainPage, {}, [className])}>
      <ErrorHandleButton />
      <span>{t('Main Page')}</span>
    </div>
  );
}

export default MainPage;
