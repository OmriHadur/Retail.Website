import { CreateResource } from '../create.resource';

export class LoginCreateResource extends CreateResource {
  email: string;
  password: string;
}
