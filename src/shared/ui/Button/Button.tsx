import { cn, cnMods } from 'shared/lib/classNames/classNames';
import classes from './Button.module.scss';

import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const enum ButtonVariant {
  REGULLAR = 'regullar',
  ROUND = 'round',
  PANNEL = 'pannel',
  SQUARE = 'square'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant,
  isRegullarActive?: boolean
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    isRegullarActive,
    variant = ButtonVariant.REGULLAR,
    ...otherProps
  } = props;

  const mods: cnMods = {
    [classes.isActive]: isRegullarActive
  }

  return (
    <button
      className={cn(classes.button, mods, [className, classes[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}
