import { cn } from 'shared/lib/classNames/classNames';
import classes from './AuthControl.module.scss';

import { useState, type PropsWithChildren, useCallback } from 'react';
import SignIn from 'shared/assets/icons/sign-in.svg';
import Profile from 'shared/assets/icons/profile.svg';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { authActions } from 'features/AuthByUsername/model/slice/authSlice';

interface AuthControlProps {
  className?: string;
}

export const AuthControl = (props: PropsWithChildren<AuthControlProps>) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [])

  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleUserLogout = () => {
    dispatch(userActions.userLogout());
    handleCloseModal();
    dispatch(authActions.setUsername(''))
    dispatch(authActions.setPassword(''))
  }

  if (authData) {
    return (
      <div className={cn(classes.authControl, {}, [className])}>
        <div
          className={cn(classes.authControlWrapper, {}, [classes.activeIcon])}
          onClick={handleUserLogout}>
          <span className={classes.authText}>Sign Out</span>
          <Profile className={classes.authIcon} />
        </div>
        <LoginModal isOpen={false} onClose={handleCloseModal} />
      </div>
    )
  }

  return (
    <div className={cn(classes.authControl, {}, [className])}>
      <div className={classes.authControlWrapper} onClick={handleOpenModal}>
        <span className={classes.authText}>Sign In</span>
        <SignIn className={classes.authIcon} />
      </div>
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
}
