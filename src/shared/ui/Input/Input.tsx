import { cn } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

import type { InputHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, value, onChange, type = 'text', ...otherProps } = props;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={cn(classes.inputWrapper, {}, [className])}>
      <input
        ref={ref}
        className={classes.input}
        type={type}
        onChange={onInputChange}
        value={value}
        {...otherProps}
      />
    </div>
  );
})

Input.displayName = 'Input';
