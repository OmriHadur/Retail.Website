import { CartResource } from "../cart/cart.resource";
import { Resource } from "../resource";
import { OrderCustomerResource } from "./order.customer.resource";
import { DeliveryWindowResource } from "./delivery.window.resource";

export class OrderResource extends Resource {
  cart: CartResource;
  customer: OrderCustomerResource;
  created: Date;
  status: string;
  deliveryWindow: DeliveryWindowResource;
}
