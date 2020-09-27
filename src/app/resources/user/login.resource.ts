
import { UserResource } from './user.resource';
import { Resource } from '../resource';

export class LoginResource extends Resource {
  token: string;
  user: UserResource;
}
