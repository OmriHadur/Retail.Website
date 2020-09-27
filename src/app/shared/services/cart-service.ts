import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "./local-storage-service";
import { RestApiService } from "../../core/services/rest-api.service";
import { Injectable } from "@angular/core";
import { CartCreateResource } from "src/app/resources/cart/cart.create.resource";
import { CartResource } from "src/app/resources/cart/cart.resource";

@Injectable({
  providedIn: "root",
})
export class CartService extends RestApiService<
  CartCreateResource,
  CartResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "carts");
    localStorageService.event.on(
      localStorageService.onCartChanged,
      async (cartId) => {
        var cart = await this.getById(cartId);
        this.localStorageService.setCart(cart);
      }
    );
    localStorageService.event.on(localStorageService.onUserChanged, (user) => {
      if (user) {
        this.setHeader(user);
        this.assignCart();
      }
    });
  }

  async getOrCreate(): Promise<CartResource> {
    var cart = this.localStorageService.getCart();
    if (cart) return cart;
    if (this.localStorageService.getUser()) cart = await this.getMyCart();
    if (!cart) cart = await super.create(new CartCreateResource());
    this.localStorageService.setCart(cart);
    return cart;
  }

  delete(id: any): Promise<CartResource> {
    this.localStorageService.removeCart();
    this.localStorageService.removeOrder();
    return super.delete(id);
  }

  clearCart(): Promise<CartResource> {
    var cart = this.localStorageService.getCart();
    if (!cart) return;
    return this.delete(cart.id);
  }
  async addOrder(orderId: string) {
    var cart = await this.getOrCreate();
    cart = await this.http
      .put<CartResource>(
        this.apiUrl + cart.id + "/addorder/" + orderId,
        null,
        this.httpOptions
      )
      .toPromise();
    this.localStorageService.setCart(cart);
  }

  getMyCart(): Promise<CartResource> {
    return this.http
      .get<CartResource>(this.apiUrl + "my", this.httpOptions)
      .toPromise();
  }

  private async assignCart() {
    var cart = this.localStorageService.getCart();
    if (cart) {
      return this.http
        .put(this.apiUrl + cart.id + "/assign", null, this.httpOptions)
        .toPromise();
    } else {
      this.getOrCreate();
    }
  }
}
