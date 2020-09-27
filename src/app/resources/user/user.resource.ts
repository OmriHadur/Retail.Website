import { Resource } from "../resource";
import { CreateResource } from '../create.resource';

export class UserResource extends Resource {
  lastName: string;
  firstName: string;
  email: string;
  isAdmin: boolean;
}
