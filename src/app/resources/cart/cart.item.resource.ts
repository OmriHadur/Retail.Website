import { Resource } from "../resource";
import { CartItemPrice } from "./cart.item.price";

export class CartItemResource extends Resource {
  description: string;
  imageUrl: string;

  quantity: number;
  quantityDisplay: string;
  isWeighable: boolean;
  quantityInterval: number;
  sizeDisplay: string;

  itemPrice: CartItemPrice;
  categoryName: string;
}
