import { cn } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';


export const enum ButtonVariant {
  CLEAR = 'clear',

}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    variant = ButtonVariant.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={cn(classes.button, {}, [className, classes[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}