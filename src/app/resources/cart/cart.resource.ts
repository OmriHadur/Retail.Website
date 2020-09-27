import { Resource } from "../resource";
import { CartItemResource } from "./cart.item.resource";
import { Price } from "./price";

export class CartResource extends Resource {
  cartPrice: Price;
  quantity: number;
  items: CartItemResource[];
}
