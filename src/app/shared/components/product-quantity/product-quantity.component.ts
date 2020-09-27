import { Component, Input } from "@angular/core";
import { CartResource } from "src/app/resources/cart/cart.resource";
import { CartItemService } from "src/app/shared/services/cart-item-service";
import { CartService } from "src/app/shared/services/cart-service";
import { ProductService } from "../../services/product-service";
import { LocalStorageService } from "../../services/local-storage-service";

@Component({
  selector: "product-quantity",
  templateUrl: "./product-quantity.component.html",
  styleUrls: ["./product-quantity.component.css"],
})
export class ProductQuantityComponent {
  @Input("productId") productId: string;
  @Input("showAddRemove") showAddRemove: boolean = true;
  @Input("cart") cart: CartResource;

  constructor(
    private cartitemService: CartItemService,
    private cartService: CartService,
    private productService: ProductService,
    localStorageService: LocalStorageService
  ) {
    localStorageService.getCartAndObserve((c) => (this.cart = c));
  }

  addOneToCart() {
    var cartItem = this.getCartItem();
    this.cartitemService.updateQuantity(
      this.cart.id,
      this.productId,
      cartItem.quantity + (cartItem.isWeighable ? cartItem.quantityInterval : 1)
    );
  }

  removeOneFromCart() {
    var cartItem = this.getCartItem();
    this.cartitemService.updateQuantity(
      this.cart.id,
      this.productId,
      cartItem.quantity - (cartItem.isWeighable ? cartItem.quantityInterval : 1)
    );
  }

  async addtoCart() {
    if (!this.cart) this.cart = await this.cartService.getOrCreate();
    var product = await this.productService.getById(this.productId);
    await this.cartitemService.create(this.cart.id, {
      quantity: product.isWeighable ? product.quantityInterval : 1,
      productId: this.productId,
    });
  }

  getQuantity() {
    var cartItem = this.getCartItem();
    if (!cartItem) return 0;
    return cartItem.quantity;
  }

  getQuantityDisplay() {
    var cartItem = this.getCartItem();
    if (!cartItem) return 0;
    return cartItem.quantityDisplay;
  }

  getCartItem() {
    if (!this.cart) return null;
    return this.cart.items.filter((p) => p.id == this.productId)[0];
  }
}
