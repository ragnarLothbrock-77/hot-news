import { CounterSchema } from 'entities/Counter/index';
import { UserShema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserShema;
}
