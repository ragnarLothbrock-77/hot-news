import { cn } from 'shared/lib/classNames/classNames';
import classes from './Spinner.module.scss';

import type { PropsWithChildren } from 'react';

interface SpinnerProps {
  className?: string;
}

export const Spinner = (props: PropsWithChildren<SpinnerProps>) => {
  const { className } = props;

  return (
    <div className={cn(classes.spinner, {}, [className])} >
      <div className={classes.dot1}></div>
      <div className={classes.dot2}></div>
    </div >
  );
}
