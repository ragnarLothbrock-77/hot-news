import { AuthSchema } from '../types/authShema';
import { authActions, authReducer } from './authSlice';

describe('authSlice.test', () => {
  test('set username test', () => {
    const state: DeepPartial<AuthSchema> = { username: '' };

    expect(authReducer(state as AuthSchema, authActions.setUsername('user'))).toEqual({ username: 'user' })
  });

  test('set password test', () => {
    const state: DeepPartial<AuthSchema> = { password: '' };

    expect(authReducer(state as AuthSchema, authActions.setPassword('123'))).toEqual({ password: '123' })
  });
});
