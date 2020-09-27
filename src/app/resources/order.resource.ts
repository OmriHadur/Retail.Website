import { CartResource } from "./cart/cart.resource";
import { AddressResource } from "./users/address.resource";
import { Resource } from "./resource";

export class OrderResource extends Resource {
  cart: CartResource;
  address: AddressResource;
  fullName: string;
  created: Date;
  status: string;
}
