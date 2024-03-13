import { cn } from 'shared/lib/classNames/classNames';
import classes from './AuthControl.module.scss';

import { useState, type PropsWithChildren, useCallback } from 'react';
import SignIn from 'shared/assets/icons/sign-in.svg';
import { Modal } from 'shared/ui/Modal/Modal';

interface AuthControlProps {
  className?: string;
}

export const AuthControl = (props: PropsWithChildren<AuthControlProps>) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const handleToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
    console.log('Click');
  }, [])

  return (
    <div className={cn(classes.authControl, {}, [className])}>
      <div className={classes.authControlWrapper} onClick={handleToggleModal}>
        <span className={classes.authText}>Sign In</span>
        <SignIn className={classes.authIcon} />
      </div>
      <Modal isOpen={isAuthModal} onClose={handleToggleModal}>Modal</Modal>
    </div>
  );
}
