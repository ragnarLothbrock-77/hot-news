import { cn } from 'shared/lib/classNames/classNames';
import classes from './Main.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorHandleButton } from 'app/providers/ErrorBoundary/ui/ErrorHandleButton';

interface MainProps {
  className?: string;
}

const Main = (props: PropsWithChildren<MainProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(classes.main, {}, [className])}>
      <ErrorHandleButton />
      <span>{t('Main Page')}</span>
    </div>
  );
}

export default Main;
