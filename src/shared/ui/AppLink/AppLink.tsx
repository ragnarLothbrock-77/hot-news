import { cn } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

import type { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const enum AppLinkVariant {
  PRIMARY = 'primary',
  ACCENTED = 'accented',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant
}

export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const {
    className,
    children,
    variant = AppLinkVariant.PRIMARY,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      className={cn(classes.appLink, {}, [className, classes[variant]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
}
