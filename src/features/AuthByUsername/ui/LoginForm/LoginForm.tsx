import { cn } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';

import { useRef, type PropsWithChildren, useEffect, useCallback, memo } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { authActions } from '../../model/slice/authSlice';
import { getAuthState } from 'features/AuthByUsername/model/selectors/getAuthState/getAuthState';
import { authUser } from 'features/AuthByUsername/model/services/authUser.async';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextVariant } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
  isOpen: boolean;
}

export const LoginForm = memo(function LoginForm(props: PropsWithChildren<LoginFormProps>) {
  const { className, isOpen } = props;
  const { t } = useTranslation();
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getAuthState)

  const handleUsernameChange = useCallback((value: string) => {
    dispatch(authActions.setUsername(value));
  }, [dispatch])

  const handlePasswordChange = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
  }, [dispatch])

  const handleAuthSubmit = useCallback(() => {
    dispatch(authUser({ username, password }))
  }, [dispatch, password, username])

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
      <Text title={'Authorization'} />
      {error && <Text variant={TextVariant.ERROR} text={error} />}
      <Input
        ref={usernameInputRef}
        type="text"
        placeholder='User name'
        onChange={handleUsernameChange}
        value={username}
      />
      <Input
        type="text"
        placeholder='User password'
        onChange={handlePasswordChange}
        value={password}
      />
      <Button
        className={classes.loginBtn}
        variant={ButtonVariant.PRIMARY}
        onClick={handleAuthSubmit}
        disabled={isLoading}
      >{t('Log In')}</Button>
    </div>
  );
})
