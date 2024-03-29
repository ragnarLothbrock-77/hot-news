import { cn } from 'shared/lib/classNames/classNames';
import classes from './LoginModal.module.scss';

import type { PropsWithChildren } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: PropsWithChildren<LoginModalProps>) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={cn(classes.loginModal, {}, [className])}>
      <LoginForm isOpen={isOpen} />
    </Modal>
  );
}
