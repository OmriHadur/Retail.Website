import { CreateResource } from "../create.resource";

export class DeliveryWindowCreateResource extends CreateResource {
  date: Date;
  fromHour: number;
  toHour: number;
}
