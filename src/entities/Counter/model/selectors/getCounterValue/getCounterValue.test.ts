import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

describe('get counter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
