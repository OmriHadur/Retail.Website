import { Injectable } from "@angular/core";
import { RestApiService } from "../../core/services/rest-api.service";
import { OrderResource } from "src/app/resources/order/order.resource";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "./local-storage-service";
import { CartService } from "./cart-service";
import { AddressService } from "./address-service";
import { AddressResource } from "src/app/resources/user/address.resource";
import { AddressCreateResource } from "src/app/resources/user/address.create.resource";
import { OrderCreateResource } from "src/app/resources/order/order.create.resource";

@Injectable({
  providedIn: "root",
})
export class OrderService extends RestApiService<
  OrderCreateResource,
  OrderResource
> {
  constructor(
    http: HttpClient,
    localStorageService: LocalStorageService,
    private cartService: CartService,
    private addressService: AddressService
  ) {
    super(http, localStorageService, "orders");
  }

  async editOrder(orderId: string) {
    await this.cartService.clearCart();
    await this.cartService.addOrder(orderId);
    var order = await this.getById(orderId);
    this.localStorageService.setOrder(order);
  }

  async getMyOrders(): Promise<OrderResource[]> {
    return this.http
      .get<OrderResource[]>(this.apiUrl + "my", this.httpOptions)
      .toPromise();
  }

  async getPendingOrders(): Promise<OrderResource[]> {
    return this.http
      .get<OrderResource[]>(this.apiUrl + "pending", this.httpOptions)
      .toPromise();
  }

  async createOrder(
    addressResource: AddressResource,
    userId: string,
    deliveryWindowId: string
  ): Promise<OrderResource> {
    var addressResource = await this.CreateOrUpdateAddress(
      addressResource,
      userId
    );
    var orderCreateResource = this.GetCreateResource(
      addressResource,
      deliveryWindowId
    );
    var orderResource = await super.create(orderCreateResource);
    await this.cartService.clearCart();
    return orderResource;
  }

  async updateOrder(
    addressResource: AddressResource,
    orderId: string,
    userId: string,
    deliveryWindowId: string
  ): Promise<OrderResource> {
    var addressResource = await this.CreateOrUpdateAddress(
      addressResource,
      userId
    );
    var orderCreateResource = this.GetCreateResource(
      addressResource,
      deliveryWindowId
    );
    var orderResource = await super.update(orderId, orderCreateResource);
    this.localStorageService.removeOrder();
    await this.cartService.clearCart();
    return orderResource;
  }

  async markAsShipped(orderId: string) {
    return this.http
      .put(this.apiUrl + orderId + "/shipped", null, this.httpOptions)
      .toPromise();
  }

  private GetCreateResource(
    addressResource: AddressResource,
    deliveryWindowId: string
  ) {
    var orderCreateResource = new OrderCreateResource();
    orderCreateResource.addressId = addressResource.id;
    orderCreateResource.cartId = this.localStorageService.getCart().id;
    orderCreateResource.deliveryWindowId = deliveryWindowId;
    return orderCreateResource;
  }

  private async CreateOrUpdateAddress(
    addressResource: AddressResource,
    userId: string
  ): Promise<AddressResource> {
    var createAddressResource = new AddressCreateResource();
    Object.assign(createAddressResource, addressResource);
    if (!addressResource.id)
      return await this.addressService.create(userId, createAddressResource);
    else
      return await this.addressService.update(
        userId,
        addressResource.id,
        createAddressResource
      );
  }
}
