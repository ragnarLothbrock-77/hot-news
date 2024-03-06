import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const RouterDecorator: FC<Props> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export default RouterDecorator;
