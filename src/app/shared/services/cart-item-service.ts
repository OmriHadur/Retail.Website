import { HttpClient } from "@angular/common/http";
import { InnerRestApiService } from "../../core/services/inner-rest-api.service";
import { LocalStorageService } from "./local-storage-service";
import { CartItemCreateResource } from "src/app/resources/cart/cart.item.create.resource";
import { CartItemResource } from "src/app/resources/cart/cart.item.resource";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartItemService extends InnerRestApiService<
  CartItemCreateResource,
  CartItemResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "carts/%s1/items/");
  }

  async create(
    parentId: string,
    resource: CartItemCreateResource
  ): Promise<CartItemResource> {
    var cartItem = await super.create(parentId, resource);
    this.localStorageService.emitonCartChanged(parentId, cartItem);
    return cartItem;
  }

  async update(
    parentId: string,
    id: any,
    resource: CartItemCreateResource
  ): Promise<CartItemResource> {
    var cartItem = await super.update(parentId, id, resource);
    this.localStorageService.emitonCartChanged(parentId, cartItem);
    return cartItem;
  }

  async delete(parentId: string, id: any): Promise<CartItemResource> {
    var cartItem = await super.delete(parentId, id);
    this.localStorageService.emitonCartChanged(parentId, cartItem);
    return cartItem;
  }

  async updateQuantity(
    cartId: string,
    productId: string,
    quantity: number
  ): Promise<CartItemResource> {
    if (quantity == 0) return await this.delete(cartId, productId);
    else
      return await this.update(cartId, productId, {
        quantity: quantity,
        productId: productId,
      });
  }
}
