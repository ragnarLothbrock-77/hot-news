import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthPassword } from './getAuthPassword';

describe('getAuthPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        password: '123'
      }
    };

    expect(getAuthPassword(state as StateSchema)).toEqual('123');
  })

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthPassword(state as StateSchema)).toEqual('');
  })
})
