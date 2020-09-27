import { Component, OnInit, Input } from "@angular/core";
import { CartItemResource } from "src/app/resources/cart/cart.item.resource";
import { OrderResource } from "src/app/resources/order/order.resource";
import { OrderItemService } from "../../../shared/services/order-item-service";
import { OrderItemCreateResource } from "src/app/resources/order/order.item.create.resource";
import { OrderService } from "src/app/shared/services/order-service";

@Component({
  selector: "admin-order-items",
  templateUrl: "./admin-order-items.component.html",
  styleUrls: ["./admin-order-items.component.css"],
})
export class AdminOrderItemsComponent implements OnInit {
  @Input("order") order: OrderResource;
  hovering: CartItemResource;

  constructor(
    private orderItemService: OrderItemService,
    private orderService: OrderService
  ) {}

  ngOnInit() {}
  async removeOneFromOrder(cartItem: CartItemResource) {
    this.changeOrderItemQuantity(cartItem, false);
  }
  addOneToOrder(cartItem: CartItemResource) {
    this.changeOrderItemQuantity(cartItem, true);
  }

  updateQuantity(cartItem: CartItemResource) {
    var orderItemCreateResource = new OrderItemCreateResource();
    orderItemCreateResource.productId = cartItem.id;
    orderItemCreateResource.quantity = cartItem.quantity;
    this.updateItem(cartItem.id, orderItemCreateResource);
  }

  changeOrderItemQuantity(cartItem: CartItemResource, add: boolean) {
    var orderItemCreateResource = this.GetOrderItemCreateResource(
      cartItem,
      add
    );
    this.updateItem(cartItem.id, orderItemCreateResource);
  }

  async updateItem(
    cartItemId: string,
    orderItemCreateResource: OrderItemCreateResource
  ) {
    await this.orderItemService.update(
      this.order.id,
      cartItemId,
      orderItemCreateResource
    );
    this.order = await this.orderService.getById(this.order.id);
  }

  private GetOrderItemCreateResource(cartItem: CartItemResource, add: boolean) {
    var orderItemCreateResource = new OrderItemCreateResource();
    orderItemCreateResource.productId = cartItem.id;
    orderItemCreateResource.quantity = cartItem.quantity + (add ? 1 : -1);
    if (orderItemCreateResource.quantity < 0)
      orderItemCreateResource.quantity = 0;
    return orderItemCreateResource;
  }
}
