import { Component, Input } from "@angular/core";
import { ProductResource } from "src/app/resources/product.resource";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { LocalStorageService } from "src/app/shared/services/local-storage-service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent {
  @Input("product") product: ProductResource;
  @Input("show-actions") showActions = true;
  @Input("cart") cart: CartResource;

  constructor(localStorageService: LocalStorageService) {
    localStorageService.getCartAndObserve((cart) => (this.cart = cart));
  }
}
