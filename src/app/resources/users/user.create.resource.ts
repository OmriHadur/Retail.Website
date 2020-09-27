import { Resource } from "../resource";
import { CreateResource } from '../create.resource';

export class UserCreateResource extends CreateResource {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
