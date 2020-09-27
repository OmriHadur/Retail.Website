import { Component } from "@angular/core";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { LocalStorageService } from 'src/app/shared/services/local-storage-service';
import { CartService } from 'src/app/shared/services/cart-service';

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.css"],
})
export class ShoppingCartComponent {
  cart: CartResource;

  constructor(
    localStorageService: LocalStorageService,
    private cartService: CartService
  ) {
    localStorageService.getCartAndObserve((cart) => (this.cart = cart));
  }

  async clear() {
    await this.cartService.delete(this.cart.id);
  }
}
