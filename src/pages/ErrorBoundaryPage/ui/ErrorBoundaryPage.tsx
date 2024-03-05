import { cn } from 'shared/lib/classNames/classNames';
import classes from './ErrorBoundaryPage.module.scss';

import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorBoundaryPageProps {
  className?: string;
}

export const ErrorBoundaryPage = (props: PropsWithChildren<ErrorBoundaryPageProps>) => {
  const { className } = props;
  const { t } = useTranslation('error');

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className={cn(classes.errorBoundaryPage, {}, [className])}>
      <span>{t('Unexpected error!')}</span>
      <Button onClick={reloadPage}>{t('Reload page')}</Button>
    </div>
  );
}
