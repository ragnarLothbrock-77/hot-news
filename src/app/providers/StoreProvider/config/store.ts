import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    auth: authReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export type RootState = StateSchema;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
