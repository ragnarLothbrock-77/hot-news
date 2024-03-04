import { cn } from 'shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';

import type { PropsWithChildren } from 'react';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
  const { className } = props;

  return (
    <div className={cn(classes.pageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
}
