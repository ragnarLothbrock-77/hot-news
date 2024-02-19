import { cn } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';

import type { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';


export const enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}


export const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      className={cn(classes.appLink, {}, [className, classes[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
}