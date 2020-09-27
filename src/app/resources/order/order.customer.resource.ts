import { AddressResource } from "../user/address.resource";
import { Resource } from "../resource";

export class OrderCustomerResource extends Resource {
  address: AddressResource;
  fullName: string;
}
