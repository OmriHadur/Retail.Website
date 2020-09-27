import { CreateResource } from '../create.resource';

export class OrderCreateResource extends CreateResource {
  cartId: string;
  addressId: string;
  deliveryWindowId: string;
}
