import { useRef, type ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children?: ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const ref = useRef();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    console.log('Portal отработал', document.querySelector('#app'));
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    ref.current = document.querySelector('#root') || undefined;
    setIsMounted(true);
  }, []);

  return isMounted && ref.current ? createPortal(children, ref.current) : null;
}
