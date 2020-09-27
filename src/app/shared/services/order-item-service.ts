import { HttpClient } from "@angular/common/http";
import { CartItemResource } from "src/app/resources/cart/cart.item.resource";
import { OrderItemCreateResource } from 'src/app/resources/order/order.item.create.resource';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service';
import { InnerRestApiService } from 'src/app/core/services/inner-rest-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService extends InnerRestApiService<
  OrderItemCreateResource,
  CartItemResource
> {
  constructor(http: HttpClient, localStorageService: LocalStorageService) {
    super(http, localStorageService, "orders/%s1/items/");
  }
}
