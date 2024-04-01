import { StateSchema } from 'app/providers/StoreProvider'
import { getAuthUsername } from './getAuthUsername';

describe('getAuthUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        username: 'Username'
      }
    };

    expect(getAuthUsername(state as StateSchema)).toEqual('Username');
  })

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthUsername(state as StateSchema)).toEqual('');
  })
})
