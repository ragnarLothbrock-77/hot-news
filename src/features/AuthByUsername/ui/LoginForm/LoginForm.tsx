import { cn } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';

import { useRef, type PropsWithChildren, useEffect } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
}

export const LoginForm = (props: PropsWithChildren<LoginFormProps>) => {
  const { className, isOpen } = props;
  const { t } = useTranslation();
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      usernameInputRef.current.focus();
    }, 100)

    return () => {
      clearTimeout(timerId)
    }
  }, [isOpen]);

  return (
    <div className={cn(classes.loginForm, {}, [className])}>
      <Input
        ref={usernameInputRef}
        type="text"
        placeholder='User name'
      />
      <Input
        type="text"
        placeholder='User password'
      />
      <Button
        className={classes.loginBtn}
        variant={ButtonVariant.REGULLAR}
      >{t('Log In')}</Button>
    </div>
  );
}
