import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  state?: DeepPartial<StateSchema>
}

const StoreDecorator: FC<Props> = ({ children, state }) => (
  <StoreProvider initialState={state as StateSchema}>{children}</StoreProvider>
);

export default StoreDecorator;
