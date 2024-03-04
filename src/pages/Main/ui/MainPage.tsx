import { cn } from 'shared/lib/classNames/classNames';
import classes from './MainPage.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {
  className?: string;
}

const MainPage = (props: PropsWithChildren<MainPageProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(classes.mainPage, {}, [className])}>
      {t('Main Page')}
    </div>
  );
}

export default MainPage;
