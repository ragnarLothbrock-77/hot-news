import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

describe('get counter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
