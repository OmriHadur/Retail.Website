import { CreateResource } from '../create.resource';

export class AddressCreateResource extends CreateResource {
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
}
