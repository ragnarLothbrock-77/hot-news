import { cn } from 'shared/lib/classNames/classNames';
import classes from './Line.module.scss';

import type { PropsWithChildren } from 'react';

interface LineProps {
  className?: string;
}

export const Line = (props: PropsWithChildren<LineProps>) => {
  const { className } = props;

  return (
    <div className={cn(classes.line, {}, [className])} />
  );
}
