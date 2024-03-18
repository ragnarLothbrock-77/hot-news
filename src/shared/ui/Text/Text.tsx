import { cn } from 'shared/lib/classNames/classNames';
import classes from './Text.module.scss';

import type { PropsWithChildren } from 'react';

export const enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
}

export const Text = (props: PropsWithChildren<TextProps>) => {
  const {
    className,
    title,
    text,
    variant = TextVariant.PRIMARY
  } = props;

  return (
    <div className={cn(classes.textWrapper, {}, [className, classes[variant]])}>
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
}
