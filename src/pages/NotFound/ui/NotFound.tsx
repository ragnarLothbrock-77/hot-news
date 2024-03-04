import { cn } from 'shared/lib/classNames/classNames';
import classes from './NotFound.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: PropsWithChildren<NotFoundProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(classes.notFound, {}, [className])}>
      {t('Page Not Found')}
    </div>
  );
}
