import { cn } from 'shared/lib/classNames/classNames';
import classes from './ErrorBoundary.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorBoundaryProps {
  className?: string;
}

export const ErrorBoundary = (props: PropsWithChildren<ErrorBoundaryProps>) => {
  const { className } = props;
  const { t } = useTranslation('error');

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className={cn(classes.errorBoundary, {}, [className])}>
      <span>{t('Unexpected error!')}</span>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  );
}
