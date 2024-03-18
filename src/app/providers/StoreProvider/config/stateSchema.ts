import { UserShema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername';

export interface StateSchema {
  user: UserShema;
  auth: AuthSchema;
}
