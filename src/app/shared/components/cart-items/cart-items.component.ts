import { Component, Input } from "@angular/core";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { CartItemResource } from "src/app/resources/cart/cart.item.resource";
import { CartItemService } from "../../services/cart-item-service";

@Component({
  selector: "cart-items",
  templateUrl: "./cart-items.component.html",
  styleUrls: ["./cart-items.component.css"],
})
export class CartItemsComponent {
  hovering: CartItemResource;

  @Input("cart") cart: CartResource;
  @Input("show-add-remove") showAddRemove: boolean = true;

  constructor(private cartItemService: CartItemService) {}

  removeItem(cartItem: CartItemResource) {
    this.cartItemService.delete(this.cart.id, cartItem.id);
  }
}
