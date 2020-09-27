import { CreateResource } from './create.resource';

export class OrderCreateResource extends CreateResource {
  CartId: string;
  AddressId: string;
}
