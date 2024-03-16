import { cn, cnMods } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';

import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useCallback
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, children, isOpen, onClose } = props;

  const propagationHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const mods: cnMods = {
    [classes.opened]: isOpen
  }

  return (
    <Portal>
      <div className={cn(classes.modal, mods, [className])}>
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={propagationHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
