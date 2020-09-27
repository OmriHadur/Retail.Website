import { Resource } from "../resource";


export class DeliveryWindowResource extends Resource {
  date: Date;
  fromHour: number;
  toHour: number;
  isAvailable: boolean;
}
