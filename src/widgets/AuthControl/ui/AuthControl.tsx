import { cn } from 'shared/lib/classNames/classNames';
import classes from './AuthControl.module.scss';

import { useState, type PropsWithChildren, useCallback } from 'react';
import SignIn from 'shared/assets/icons/sign-in.svg';
import { LoginModal } from 'features/AuthByUsername';

interface AuthControlProps {
  className?: string;
}

export const AuthControl = (props: PropsWithChildren<AuthControlProps>) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [])

  const handleOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [])

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
