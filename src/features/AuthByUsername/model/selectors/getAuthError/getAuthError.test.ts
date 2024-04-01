import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthError } from './getAuthError';

describe('getAuthError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        error: 'error'
      }
    };

    expect(getAuthError(state as StateSchema)).toEqual('error');
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthError(state as StateSchema)).toEqual(undefined);
  })
})
