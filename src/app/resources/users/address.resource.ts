import { UserResource } from "./user.resource";

export class AddressResource extends UserResource {
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
}
