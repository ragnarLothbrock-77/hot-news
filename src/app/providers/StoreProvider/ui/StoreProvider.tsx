import { Provider } from 'react-redux';

import type { PropsWithChildren, ReactNode } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema
}

export const StoreProvider = (props: PropsWithChildren<StoreProviderProps>) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
