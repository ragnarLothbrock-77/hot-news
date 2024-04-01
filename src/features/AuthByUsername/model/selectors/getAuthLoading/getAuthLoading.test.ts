import { StateSchema } from 'app/providers/StoreProvider';
import { getAuthLoading } from './getAuthLoading';

describe('getAuthLoading.test', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      auth: {
        isLoading: true
      }
    };

    expect(getAuthLoading(state as StateSchema)).toEqual(true);
  })

  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getAuthLoading(state as StateSchema)).toEqual(false);
  })
})
